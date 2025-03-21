'use client';

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default function SurveyReportTable() {
  const [surveyData, setSurveyData] = useState([]);
  const [loading, setLoading] = useState(true);
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

    const token = localStorage.getItem("accessToken");
    const auth = checkAuth();
    if (!auth) {
      toast.error("Authorization failed. Redirecting to login...");
      router.push("/login");
      return;
    }

    const fetchSurveyData = async () => {
      try {
        const response = await fetch("https://reach-backend.vercel.app/survey/getSurveyData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        });

        const data = await response.json();
        setSurveyData(data);
      } catch (error) {
        console.error("Error fetching survey data:", error);
        toast.error("Failed to fetch survey data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSurveyData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6 pt-[6rem] max-w-full mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Survey Report</h1>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading data...</p>
          </div>
        ) : surveyData.length === 0 ? (
          <p className="text-center text-red-500 font-semibold">No survey data available.</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
            <table className="w-full border border-gray-200 text-sm text-gray-700">
              <thead className="bg-blue-500 text-white text-sm uppercase">
                <tr>
                  <th className="px-4 py-2 border-b">Date</th>
                  <th className="px-4 py-2 border-b">Dredger</th>
                  <th className="px-4 py-2 border-b">Shift</th>
                  <th className="px-4 py-2 border-b">Forward</th>
                  <th className="px-4 py-2 border-b">Width</th>
                  <th className="px-4 py-2 border-b">Depth</th>
                  <th className="px-4 py-2 border-b">Dyke</th>
                  <th className="px-4 py-2 border-b">Block</th>
                  <th className="px-4 py-2 border-b">Production</th>
                </tr>
              </thead>
              <tbody>
                {surveyData.map((survey) => (
                  <tr className="odd:bg-gray-50 text-center" key={survey._id}>
                    <td className="px-4 py-2 border-b">{survey.date}</td>
                    <td className="px-4 py-2 border-b">{survey.dredger}</td>
                    <td className="px-4 py-2 border-b">{survey.shift}</td>
                    <td className="px-4 py-2 border-b">{survey.forward}</td>
                    <td className="px-4 py-2 border-b">{survey.width}</td>
                    <td className="px-4 py-2 border-b">{survey.depth}</td>
                    <td className="px-4 py-2 border-b">{survey.dyke}</td>
                    <td className="px-4 py-2 border-b">{survey.block}</td>
                    <td className="px-4 py-2 border-b font-bold">{survey.production}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
