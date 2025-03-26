// components/ProductionSection.js
"use client";
import React from "react";
import { FaIndustry, FaUserCog } from "react-icons/fa";

export default function ProductionSection({
  selectedView,
  selectedDredger,
  data,
  monthlyData,
  showMonth,
}) {
  return (
    // <>
    //   {selectedView === "Survey" && (
    //     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
    //       <FaIndustry size={48} className="text-blue-600" />
    //       <h2 className="text-2xl font-semibold text-gray-800">Production</h2>
    //       <div className="grid grid-cols-2 gap-6 w-full text-center">
    //         <div className="bg-blue-100 md:p-4 p-2 rounded-lg shadow-md">
    //           <h3 className="text-lg font-semibold text-blue-700"> Date Production</h3>
    //           <p className="text-[15px] md:text-xl font-bold text-gray-800">
    //             {selectedDredger}: {data.surveyProduction} m³
    //           </p>
    //           <p className="md:text-lg text-[14px] font-medium text-gray-600">
    //             Total Hours: {data.surveyProductionPerHour}
    //           </p>
    //           <p className="text-sm text-gray-600">
    //             Efficiency: {data.productionHours}
    //           </p>
    //         </div>

    //         <div className="bg-green-100 md:p-4 p-2 rounded-lg shadow-md">
    //           <h3 className="text-lg font-semibold text-green-700">
    //             {showMonth ? "Monthly" : "Date Range"} Production
    //           </h3>
    //           <p className="text-[15px] md:text-xl font-bold text-gray-800">
    //           {selectedDredger}: {monthlyData.surveyProduction} m³
    //           </p>
    //           <p className="md:text-lg text-[14px] font-medium text-gray-600">
    //             Total Hours: {monthlyData.surveyProductionPerHour}
    //           </p>
    //           <p className="text-sm text-gray-600">
    //             Efficiency: {monthlyData.productionHours}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   )}

    //   {selectedView === "Operator" && (
    //     <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
    //       <FaUserCog size={48} className="text-green-600" />
    //       <h2 className="text-2xl font-semibold text-gray-800">
    //         Operator (Production)
    //       </h2>
    //       <div className="grid grid-cols-2 gap-6 w-full text-center">
    //         <div className="bg-green-100 p-4 rounded-lg shadow-md">
    //           <h3 className="text-lg font-semibold text-green-700">Today</h3>
    //           <p className="text-xl font-bold text-gray-800">
    //             {selectedDredger} - {data.operatorProduction} m³
    //           </p>
    //           <p className="text-lg font-medium text-gray-600">
    //             Total Hours: {data.operatorProductionPerHour}
    //           </p>
    //           <p className="text-sm text-gray-600">
    //             Efficiency: {data.productionHours}
    //           </p>
    //         </div>

    //         <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
    //           <h3 className="text-lg font-semibold text-yellow-700">
    //             {showMonth ? "Monthly" : "Date Range"}
    //           </h3>
    //           <p className="text-xl font-bold text-gray-800">
    //             {monthlyData.operatorProduction} m³
    //           </p>
    //           <p className="text-lg font-medium text-gray-600">
    //             Total Hours: {monthlyData.operatorProductionPerHour}
    //           </p>
    //           <p className="text-sm text-gray-600">
    //             Efficiency: {monthlyData.productionHours}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>
      <>
      {selectedView === "Survey" && (
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
          <FaIndustry size={48} className="text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Production</h2>
          <div className="grid md:grid-cols-2 grid-rows-1 gap-6 w-full text-center">
            <div className="bg-blue-100 md:p-4 p-2 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-700"> Date Production</h3>
              <p className="text-[15px] md:text-xl font-bold text-gray-800">
                {selectedDredger}: {data.surveyProduction} m³
              </p>
              <p className="md:text-lg text-[14px] font-medium text-gray-600">
                Total Hours: {data.surveyProductionPerHour}
              </p>
              <p className="text-sm text-gray-600">
                Efficiency: {data.productionHours}
              </p>
            </div>

            <div className="bg-green-100 md:p-4 p-2 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-700">
                {showMonth ? "Monthly" : "Date Range"} Production
              </h3>
              <p className="text-[15px] md:text-xl font-bold text-gray-800">
              {selectedDredger}: {monthlyData.surveyProduction} m³
              </p>
              <p className="md:text-lg text-[14px] font-medium text-gray-600">
                Total Hours: {monthlyData.surveyProductionPerHour}
              </p>
              <p className="text-sm text-gray-600">
                Efficiency: {monthlyData.productionHours}
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedView === "Operator" && (
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
          <FaUserCog size={48} className="text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Operator (Production)
          </h2>
          <div className="grid md:grid-cols-2 grid-rows-1 gap-6 w-full text-center">
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-green-700">Date Production</h3>
              <p className="text-xl font-bold text-gray-800">
                {selectedDredger} - {data.operatorProduction} m³
              </p>
              <p className="text-lg font-medium text-gray-600">
                Total Hours: {data.operatorProductionPerHour}
              </p>
              <p className="text-sm text-gray-600">
                Efficiency: {data.productionHours}
              </p>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-yellow-700">
                {showMonth ? "Monthly" : "Date Range Production"}
              </h3>
              <p className="text-xl font-bold text-gray-800">
                {monthlyData.operatorProduction} m³
              </p>
              <p className="text-lg font-medium text-gray-600">
                Total Hours: {monthlyData.operatorProductionPerHour}
              </p>
              <p className="text-sm text-gray-600">
                Efficiency: {monthlyData.productionHours}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
