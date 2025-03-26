// components/DateRangeViewSection.js
"use client";
import React from "react";

export default function DateRangeViewSection({
  date,
  setDate,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  selectedDredger,
  setSelectedDredger,
  selectedView,
  setSelectedView,
  dredgers,
}) {
  return (
 
    // <div className="flex flex-col md:flex-row sm:text-xs md:text-xl justify-between items-center mb-4 bg-white p-3 rounded-lg shadow w-full">
    //   <div className="w-full md:w-auto mb-2 md:mb-0 flex flex-wrap items-center">
    //     {/* Date input */}
    //     <label className="mr-1 font-semibold">Date:</label>
    //     <input
    //       type="date"
    //       className="p-1 border rounded-md w-[7.2rem] md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       value={date}
    //       onChange={(e) => setDate(e.target.value)}
    //     />
    //     {/* Dredger selection */}
    //     <label className="ml-4 mr-1 font-semibold">Dredger:</label>
    //     <select
    //       className="p-1 border rounded-md w-[4.5rem] md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       value={selectedDredger}
    //       onChange={(e) => setSelectedDredger(e.target.value)}
    //     >
    //       {dredgers.map((dredger) => (
    //         <option key={dredger} value={dredger}>
    //           {dredger}
    //         </option>
    //       ))}
    //     </select>
    //   </div>

    //   <div className="w-full md:w-auto mb-2 md:mb-0 flex flex-wrap items-center">
    //     {/* Date range inputs */}
    //     <label className="mr-1 font-semibold">Range:</label>
    //     <input
    //       type="date"
    //       className="p-1 border rounded-md md:w-[11rem] w-[7rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       value={startDate}
    //       onChange={(e) => setStartDate(e.target.value)}
    //     />
    //     <label className="ml-2 mr-1 font-semibold">to:</label>
    //     <input
    //       type="date"
    //       className="p-1 border rounded-md md:w-[11rem] w-[7rem]  focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       value={endDate}
    //       onChange={(e) => setEndDate(e.target.value)}
    //     />
    //   </div>

    //   <div className="w-full md:w-auto flex flex-wrap items-center">
    //     {/* View selection */}
    //     <label className="mr-1 font-semibold">View:</label>
    //     <select
    //       className="p-1 border rounded-md w-[5rem] md:w-auto focus:ring-2 focus:ring-blue-500"
    //       value={selectedView}
    //       onChange={(e) => setSelectedView(e.target.value)}
    //     >
    //       <option value="Survey">Survey</option>
    //       <option value="Operator">Operator</option>
    //     </select>
    //   </div>
    // </div>

        <div className="flex flex-col md:flex-row text-xs md:text-xl justify-between items-center mb-4 bg-white p-3 rounded-lg shadow w-full">
      <div className="w-full md:w-auto mb-2 md:mb-0 flex flex-wrap items-center">
        {/* Date input */}
        <label className="mr-1 font-semibold">Date:</label>
        <input
          type="date"
          className="p-1 border rounded-md w-[7.2rem] md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {/* Dredger selection */}
        <label className="ml-4 mr-1 font-semibold">Dredger:</label>
        <select
          className="p-1 border rounded-md w-[4em] md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedDredger}
          onChange={(e) => setSelectedDredger(e.target.value)}
        >
          {dredgers.map((dredger) => (
            <option key={dredger} value={dredger}>
              {dredger}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:w-auto mb-2 md:mb-0 flex flex-wrap items-center">
        {/* Date range inputs */}
        <label className="mr-1 font-semibold">Range:</label>
        <input
          type="date"
          className="p-1 border rounded-md md:w-[11rem] w-[6rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label className="ml-2 mr-1 font-semibold">to:</label>
        <input
          type="date"
          className="p-1 border rounded-md md:w-[11rem] w-[7rem]  focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className="w-full md:w-auto flex flex-wrap items-center">
        {/* View selection */}
        <label className="mr-1 font-semibold">View:</label>
        <select
          className="p-1 border rounded-md w-[5rem] md:w-auto focus:ring-2 focus:ring-blue-500"
          value={selectedView}
          onChange={(e) => setSelectedView(e.target.value)}
        >
          <option value="Survey">Survey</option>
          <option value="Operator">Operator</option>
        </select>
      </div>
    </div>


  );
}
