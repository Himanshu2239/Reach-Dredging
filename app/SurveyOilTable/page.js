"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const DredgerTable = () => {
  const [dredgers] = useState(["K7", "K9", "K14", "K15"]);
  const [selectedDredger, setSelectedDredger] = useState("K7");
  const [reportData, setReportData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();




const checkAuth = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return false;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      
      console.log("decodedToken",  decodedToken)
      console.log("currentTime", currentTime)

       if (decodedToken.exp < currentTime) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }
  return false;
};

  useEffect(() => {
    console.log("Let Start")
    // console.log("checkAuth", checkAuth)
    const auth = checkAuth();
    let token;
    if (!auth) {
      toast.error("Authorization failed. Redirecting to login...");
      router.push("/login");
      return;
    }
    else
      token = localStorage.getItem("accessToken")

    const fetchReportData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5001/survey/getSurveyOilReport",
          { dredger: selectedDredger },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data?.reports?.length) {
          setReportData(response.data);
          setErrorMessage("");
        } else {
          setReportData(null);
          setErrorMessage(`No reports found for dredger: ${selectedDredger}`);
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
        setErrorMessage("Failed to fetch data. Please try again.");
        setReportData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchReportData();
  }, [selectedDredger]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6 pt-[6rem] max-w-full mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Dredger Oil Report</h1>

        <div className="mb-6 flex items-center space-x-4">
          <label className="font-medium text-gray-700">Select Dredger:</label>
          <select
            className="border border-gray-300 rounded-md p-2 bg-white shadow-sm"
            onChange={(e) => setSelectedDredger(e.target.value)}
            value={selectedDredger}
          >
            {dredgers.map((dredger) => (
              <option key={dredger} value={dredger}>{dredger}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="text-center py-6">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading data...</p>
          </div>
        ) : errorMessage ? (
          <p className="text-red-500 font-semibold">{errorMessage}</p>
        ) : (
          reportData && (
            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Dredger: {reportData.dredger}</h2>
              <table className="w-full border border-gray-200 text-sm text-gray-700">
                <thead className="bg-blue-700 text-white text-sm uppercase">
                  <tr>
                    <th className="border px-4 py-2" rowSpan="2">Date</th>
                    {reportData.reports[0]?.tanks.map((tank) => (
                      <th key={tank.tankName} className="border px-4 py-2 text-center" colSpan="2">{tank.tankName}</th>
                    ))}
                    <th className="border px-4 py-2 text-center" rowSpan="2">Total Volume</th>
                  </tr>
                  <tr>
                    {reportData.reports[0]?.tanks.map((tank) => (
                      <React.Fragment key={tank.tankName}>
                        <th className="border px-4 py-2 text-center">Height (cm)</th>
                        <th className="border px-4 py-2 text-center">Volume (cm³)</th>
                      </React.Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reportData.reports.map((report) => (
                    <tr key={report._id} className="odd:bg-gray-50">
                      <td className="border px-4 py-2 font-medium">{report.date}</td>
                      {report.tanks.map((tank) => (
                        <React.Fragment key={tank._id}>
                          <td className="border px-4 py-2 text-center">{tank.height}</td>
                          <td className="border px-4 py-2 text-center">{tank.volume.toFixed(2)}</td>
                        </React.Fragment>
                      ))}
                      <td className="border px-4 py-2 font-bold text-center">{report.totalVolume.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default DredgerTable;
