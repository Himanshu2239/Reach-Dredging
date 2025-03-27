"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dredgerTankData = {
  K7: [
    { tankName: "Starboard Side Tank 1", litersPerCm: 52.5 },
    { tankName: "Port Side Tank", litersPerCm: 52.5 },
    { tankName: "Service Tank", litersPerCm: 3.4 },
    { tankName: "Barrel", litersPerCm: 2.5 },
  ],
  K9: [
    { tankName: "Starboard Side Tank 1", litersPerCm: 52.8 },
    { tankName: "Port Side Tank 1", litersPerCm: 52.8 },
    { tankName: "Barrel", litersPerCm: 2.5 },
  ],
  K14: [
    { tankName: "Starboard Side Tank 1", litersPerCm: 86.943 },
    { tankName: "Starboard Side Tank 2", litersPerCm: 80.943 },
    { tankName: "Service Tank 1", litersPerCm: 2.760},
    { tankName: "Service Tank 2", litersPerCm: 2.760},
    { tankName: "Port Side Tank 1", litersPerCm: 86.943 },
    { tankName: "Port Side Tank 2", litersPerCm:  80.811},
    { tankName: "Barrel", litersPerCm: 2.500 },
  ],
  K15: [
    { tankName: "Starboard Side Tank 1", litersPerCm: 86.8 },
    { tankName: "Starboard Side Tank 2", litersPerCm: 80.073},
    { tankName: "Service Tank 1", litersPerCm: 2.500},
    { tankName: "Service Tank 2", litersPerCm:2.500},
    { tankName: "Port Side Tank 1", litersPerCm: 86.8 },
    { tankName: "Port Side Tank 2", litersPerCm: 80.073},
    { tankName: "Barrel", litersPerCm: 2.500 },
  ],
};

const SurveyOilReport = () => {
  const [selectedDredger, setSelectedDredger] = useState("K7");
  const [heights, setHeights] = useState({});
  const [reportDate, setReportDate] = useState("");

  const handleDredgerChange = (e) => setSelectedDredger(e.target.value);
  const handleDateChange = (e) => setReportDate(e.target.value);
  const handleHeightChange = (tankName, value) => {
    setHeights((prev) => ({
      ...prev,
      [selectedDredger]: {
        ...(prev[selectedDredger] || {}),
        [tankName]: parseFloat(value) || 0,
      },
    }));
  };

  // const handleSubmit = () => {
  //   const reportData = {
  //     date: reportDate,
  //     dredger: selectedDredger,
  //     tanks: heights[selectedDredger] || {},
  //   };
  //   console.log("Oil Report Data:", reportData);
  // };

  const handleSubmit = async () => {
    if (!reportDate) {
      toast.error("Please select a report date.");
      return;
    }
    if (!selectedDredger) {
      toast.error("Please select a dredger.");
      return;
    }

    const currentTanks = dredgerTankData[selectedDredger];
    const tankRows = currentTanks.map((tank) => {
      const heightValue = heights[selectedDredger]?.[tank.tankName] || 0;
      const volume = heightValue * tank.litersPerCm;
      return { ...tank, height: heightValue, volume };
    });

    const totalVolume = tankRows.reduce((acc, row) => acc + row.volume, 0);

    const reportData = {
      date: reportDate,
      dredger: selectedDredger,
      tanks: tankRows.map(({ tankName, height, volume }) => ({
        tankName,
        height,
        volume,
      })),
      totalVolume,
    };
    
    console.log("reportData", reportData)
    const token = localStorage.getItem("accessToken");
    if(!token){
      toast.error("Authorization failed")
    }

    try {
      const response = await fetch("https://reach-backend.vercel.app/survey/addSurveyOilReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(reportData),
      });

      if (response.ok) {
        toast.success("Oil report saved successfully!");
        setHeights({});
        setReportDate("")
      } else {
        toast.error("Failed to save the oil report. Please try again.");
      }
    } catch (error) {
      console.error("Error saving the report:", error);
      toast.error("An error occurred while saving the oil report.");
    }
  };

  const currentTanks = dredgerTankData[selectedDredger];
  const tankRows = currentTanks.map((tank) => {
    const heightValue = heights[selectedDredger]?.[tank.tankName] || 0;
    const volume = heightValue * tank.litersPerCm;
    // const fixedVolume = vol
    return { ...tank, height: heightValue, volume };
  });

  const totalVolume = tankRows.reduce((acc, row) => acc + row.volume, 0);

  return (
    // <div className="flex flex-col items-center max-w-3xl md:w-full  pt-4">
    //   <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-full max-w-3xl p-8">
    //     <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Oil Report</h2>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-medium mb-2">Report Date</label>
    //       <input
    //         type="date"
    //         value={reportDate}
    //         onChange={handleDateChange}
    //         className="w-full border border-gray-300 rounded-lg p-2"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label className="block text-gray-700 font-medium mb-2">Select Dredger</label>
    //       <select
    //         value={selectedDredger}
    //         onChange={handleDredgerChange}
    //         className="w-full border border-gray-300 rounded-lg p-2"
    //       >
    //         {/* <option value="">Select dredger</option> */}
    //         <option value="K7">K7</option>
    //         <option value="K9">K9</option>
    //         <option value="K14">K14</option>
    //         <option value="K15">K15</option>
    //       </select>
    //     </div>
    //     <table className="min-w-full border border-gray-300 mb-4">
    //       <thead className="bg-gray-100">
    //         <tr>
    //           <th className="px-4 py-2 border">Tank Name</th>
    //           <th className="px-4 py-2 border">Height (cm)</th>
    //           <th className="px-4 py-2 border">Liters/cm</th>
    //           <th className="px-4 py-2 border">Volume (liters)</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {tankRows.map((row) => (
    //           <tr key={row.tankName}>
    //             <td className="px-4 py-2 border">{row.tankName}</td>
    //             <td className="px-4 py-2 border">
    //               <input
    //                 type="number"
    //                 step="any" 
    //                 value={row.height || ""}
    //                 onChange={(e) => handleHeightChange(row.tankName, e.target.value)}
    //                 className="w-24 border border-gray-300 rounded p-1"
    //               />
    //             </td>
    //             <td className="px-4 py-2 border">{row.litersPerCm.toFixed(3)}</td>
    //             <td className="px-4 py-2 border">{row.volume.toFixed(2)}</td>
    //           </tr>
    //         ))}
    //         <tr className="bg-gray-200 font-bold">
    //           <td className="px-4 py-2 border" colSpan={3}>Total Volume</td>
    //           <td className="px-4 py-2 border">{totalVolume.toFixed(2)}</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <div className="flex justify-center mt-4">
    //       <button
    //         onClick={handleSubmit}
    //         className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </div>
    //   <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    // </div>

     <div className="flex flex-col items-center max-w-3xl w-full pt-4">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-full p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Oil Report</h2>

        {/* Report Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Report Date</label>
          <input
            type="date"
            value={reportDate}
            onChange={handleDateChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Dredger Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Select Dredger</label>
          <select
            value={selectedDredger}
            onChange={handleDredgerChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="K7">K7</option>
            <option value="K9">K9</option>
            <option value="K14">K14</option>
            <option value="K15">K15</option>
          </select>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-4">
            <thead className="bg-gray-100 text-sm sm:text-base">
              <tr>
                <th className="px-3 sm:px-4 py-2 border">Tank Name</th>
                <th className="px-3 sm:px-4 py-2 border">Height (cm)</th>
                <th className="px-3 sm:px-4 py-2 border">Liters/cm</th>
                <th className="px-3 sm:px-4 py-2 border">Volume (liters)</th>
              </tr>
            </thead>
            <tbody>
              {tankRows.map((row) => (
                <tr key={row.tankName}>
                  <td className="px-3 sm:px-4 py-2 border text-sm sm:text-base">{row.tankName}</td>
                  <td className="px-3 sm:px-4 py-2 border">
                    <input
                      type="number"
                      step="any"
                      value={row.height || ""}
                      onChange={(e) => handleHeightChange(row.tankName, e.target.value)}
                      className="w-full sm:w-24 border border-gray-300 rounded p-1 text-sm sm:text-base"
                    />
                  </td>
                  <td className="px-3 sm:px-4 py-2 border text-sm sm:text-base">{row.litersPerCm.toFixed(3)}</td>
                  <td className="px-3 sm:px-4 py-2 border text-sm sm:text-base">{row.volume.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="bg-gray-200 font-bold">
                <td className="px-3 sm:px-4 py-2 border text-sm sm:text-base" colSpan={3}>Total Volume</td>
                <td className="px-3 sm:px-4 py-2 border text-sm sm:text-base">{totalVolume.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 sm:px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default SurveyOilReport;
