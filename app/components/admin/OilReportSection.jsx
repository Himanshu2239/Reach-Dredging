// components/OilReportSection.js
"use client";
import React from "react";
import { FaOilCan } from "react-icons/fa";

export default function OilReportSection({ oilConsumption, showMonth ,selectedDredger}) {
  return (
    // <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
    //   <FaOilCan size={48} className="text-orange-600" />
    //   <h2 className="text-2xl font-semibold text-gray-800">Oil Report</h2>
    //   <div className="grid grid-cols-2 gap-6 w-full text-center">
    //     {/* Today’s Oil Consumption */}
    //     <div className="bg-orange-100 md:p-10 p-4 rounded-lg shadow-md">
    //       <h3 className="text-lg font-semibold text-orange-700">Today</h3>
    //       <p className="text-xl font-bold text-gray-800">
    //         HSD {selectedDredger}: {oilConsumption.dateCumulative} L
    //       </p>
    //     </div>

    //     {/* Monthly Oil Consumption */}
    //     <div className="bg-red-100 md:p-10 p-4 rounded-lg shadow-md">
    //       <h3 className="text-lg  font-semibold text-red-700">
    //         {showMonth ? "Monthly" : "Date Range"}
    //       </h3>
    //       <p className="md:text-xl text-[20px] font-bold text-gray-800">
    //         HSD {selectedDredger}: {oilConsumption.rangeCumulative} L
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
      <FaOilCan size={48} className="text-orange-600" />
      <h2 className="text-2xl font-semibold text-gray-800">Oil Report</h2>
      <div className="grid md:grid-cols-2 grid-rows-1 gap-6 w-full text-center">
        {/* Today’s Oil Consumption */}
        <div className="bg-orange-100 md:p-10 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-orange-700">Date Oil Report</h3>
          <p className="md:text-xl text-[1.1rem] font-bold text-gray-800">
            HSD {selectedDredger}: {oilConsumption.dateCumulative} L
          </p>
          {oilConsumption.message && (
            <p className="text-xs text-red-600">
              {oilConsumption.message}
            </p>
          )}
        </div>

        {/* Monthly Oil Consumption */}
        <div className="bg-red-100 md:p-10 p-4 rounded-lg shadow-md">
          <h3 className="text-lg  font-semibold text-red-700">
            {showMonth ? "Monthly" : "Date Range"}
          </h3>
          <p className="md:text-xl text-[1.1rem] font-bold text-gray-800">
            HSD {selectedDredger}: {oilConsumption.rangeCumulative} L
          </p>
        </div>
      </div>
    </div>
  );
}
