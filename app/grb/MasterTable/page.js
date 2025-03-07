"use client";

import { useState } from "react";

const ProductionTable = () => {
  const [data, setData] = useState([
    {
      date: "2025-02-11",
      dredger: "Dredger A",
      width: 50,
      depth: 10,
      productionHour: 8,
      reportedProduction: 1000,
      productionPerHr: 125,
      smc: 5,
      plw: 3,
      asds: 2,
      dm: 4,
      dyke: 1,
      wp: 6,
      others: 0,
      meReading: 1500,
      aeReading: 800,
      dgReading: 600,
      meIdeal: 200,
      hsd: 50,
    },
  ]);

  return (
    <div className="overflow-x-auto rounded-lg p-4">
      <table className="min-w-full border border-gray-300 bg-white text-sm">
        <thead className="bg-gray-200">
          <tr>
            {[
              "Date",
              "Dredger",
              "Width",
              "Depth",
              "Production Hour",
              "Reported Production",
              "Production/HR",
              "SMC",
              "PLW",
              "ASDS",
              "DM",
              "DYKE",
              "WP",
              "Others",
              "ME Reading",
              "AE Reading",
              "D/G Reading",
              "ME Ideal",
              "HSD",
              
            ].map((heading) => (
              <th key={heading} className="border px-4 py-2 text-left">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              {Object.values(row).map((value, i) => (
                <td key={i} className="border px-4 py-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductionTable;
