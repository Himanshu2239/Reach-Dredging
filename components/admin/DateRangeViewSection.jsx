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
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow w-full">
      <div className="w-full md:w-auto mb-4 md:mb-0">
        {/* Date input */}
        <label className="mr-2 font-semibold">Date:</label>
        <input
          type="date"
          className="p-2 border rounded-md w-1/3 md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {/* Dredger selection */}
        <label className="ml-6 mr-2 font-semibold">Dredger:</label>
        <select
          className="p-2 border rounded-md w-[5rem] md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <div className="w-full md:w-auto mb-4 md:mb-0">
        <div className="md:flex md:items-center">
          {/* Date range inputs */}
          <label className="mr-2 font-semibold">Range:</label>
          <input
            type="date"
            className="p-2 border rounded-md w-[8rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label className="ml-4 mr-2 font-semibold">to:</label>
          <input
            type="date"
            className="p-2 border rounded-md w-[8rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full md:w-auto">
        {/* View selection */}
        <label className="mr-2 font-semibold">View:</label>
        <select
          className="p-2 border rounded-md w-1/3 md:w-auto focus:ring-2 focus:ring-blue-500"
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
