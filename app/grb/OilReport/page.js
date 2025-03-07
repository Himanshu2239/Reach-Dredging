// "use client";

// import { useState, useEffect } from "react";

// const OilReportTable = () => {
//   const [data, setData] = useState([]);
//   const [reportDate, setReportDate] = useState("");

//   // Simulating a backend API call
//   useEffect(() => {
//     async function fetchOilReportData() {
//       // Replace with actual API call
//       const response = await new Promise((resolve) =>
//         setTimeout(
//           () =>
//             resolve({
//               date: "2025-02-11",
//               records: [
//                 { type: "H.S.D", ob: 100, received: 20, issued: 10, consumed: 15, cb: 105 },
//                 { type: "15 W 40", ob: 80, received: 10, issued: 5, consumed: 8, cb: 77 },
//                 { type: "H.Y.D.68", ob: 120, received: 15, issued: 8, consumed: 12, cb: 115 },
//                 { type: "Grease", ob: 50, received: 5, issued: 4, consumed: 6, cb: 45 },
//                 { type: "Coolant", ob: 30, received: 7, issued: 3, consumed: 5, cb: 29 },
//                 { type: "Compound", ob: 20, received: 2, issued: 2, consumed: 3, cb: 17 },
//               ],
//             }),
//           1000
//         )
//       );

//       setReportDate(response.date);
//       setData(response.records);
//     }

//     fetchOilReportData();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Oil Report - {reportDate}</h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300 bg-white text-sm">
//           <thead className="bg-gray-200 text-gray-700">
//             <tr>
//               {["Oil Type", "O/B", "Received", "Issued", "Consumed", "C/B"].map((heading) => (
//                 <th key={heading} className="border px-4 py-2 text-center">
//                   {heading}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((oil, index) => (
//               <tr key={index} className="border-b text-center">
//                 <td className="border px-4 py-2 font-semibold">{oil.type}</td>
//                 <td className="border px-4 py-2">{oil.ob}</td>
//                 <td className="border px-4 py-2">{oil.received}</td>
//                 <td className="border px-4 py-2">{oil.issued}</td>
//                 <td className="border px-4 py-2">{oil.consumed}</td>
//                 <td className="border px-4 py-2 font-bold">{oil.cb}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OilReportTable;


// "use client";

// import { useState, useEffect } from "react";

// const OilReportTable = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchOilReportData() {
//       // Simulated API response (replace with actual API call)
//       const response = await new Promise((resolve) =>
//         setTimeout(
//           () =>
//             resolve([
//               {
//                 date: "2025-02-11",
//                 HSD: { ob: 100, received: 20, issued: 10, consumed: 15, cb: 105 },
//                 "15W40": { ob: 80, received: 10, issued: 5, consumed: 8, cb: 77 },
//                 HYD68: { ob: 120, received: 15, issued: 8, consumed: 12, cb: 115 },
//                 Grease: { ob: 50, received: 5, issued: 4, consumed: 6, cb: 45 },
//                 Coolant: { ob: 30, received: 7, issued: 3, consumed: 5, cb: 29 },
//                 Compound: { ob: 20, received: 2, issued: 2, consumed: 3, cb: 17 },
//               },
//             ]),
//           1000
//         )
//       );

//       setData(response);
//     }

//     fetchOilReportData();
//   }, []);

//   const oilTypes = ["HSD", "15W40", "HYD68", "Grease", "Coolant", "Compound"];
//   const subHeadings = ["O/B", "Received", "Issued", "Consumed", "C/B"];

//   return (
//     <div className="p-4">
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300 bg-white text-sm">
//           <thead className="bg-gray-200">
//             {/* Main Headers */}
//             <tr>
//               <th rowSpan={2} className="border px-4 py-2 text-center bg-gray-300">
//                 Date
//               </th>
//               {oilTypes.map((oil) => (
//                 <th key={oil} colSpan={5} className="border px-4 py-2 text-center">
//                   {oil}
//                 </th>
//               ))}
//             </tr>
//             {/* Sub-Headers (Fixed Key Issue) */}
//             <tr>
//               {oilTypes.flatMap((oil) =>
//                 subHeadings.map((sub) => (
//                   <th key={`${oil}-${sub}`} className="border px-4 py-2 text-center">
//                     {sub}
//                   </th>
//                 ))
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((entry, index) => (
//               <tr key={index} className="border-b text-center">
//                 <td className="border px-4 py-2 font-semibold">{entry.date}</td>
//                 {oilTypes.flatMap((oil) =>
//                   subHeadings.map((sub, i) => (
//                     <td key={`${oil}-${sub}-${index}`} className="border px-4 py-2">
//                       {entry[oil]?.[sub.toLowerCase()] ?? "-"}
//                     </td>
//                   ))
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OilReportTable;


"use client";

import { useState, useEffect } from "react";

const OilReportTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchOilReportData() {
      // Simulated API response (replace with actual API call)
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                date: "2025-02-11",
                HSD: { ob: 100, received: 20, issued: 10, consumed: 15, cb: 105 },
                "15W40": { ob: 80, received: 10, issued: 5, consumed: 8, cb: 77 },
                HYD68: { ob: 120, received: 15, issued: 8, consumed: 12, cb: 115 },
                Grease: { ob: 50, received: 5, issued: 4, consumed: 6, cb: 45 },
                Coolant: { ob: 30, received: 7, issued: 3, consumed: 5, cb: 29 },
                Compound: { ob: 20, received: 2, issued: 2, consumed: 3, cb: 17 },
              },
              {
                date: "2025-02-13",
                HSD: { ob: 100, received: 20, issued: 10, consumed: 15, cb: 105 },
                "15W40": { ob: 80, received: 10, issued: 5, consumed: 8, cb: 77 },
                HYD68: { ob: 120, received: 15, issued: 8, consumed: 12, cb: 115 },
                Grease: { ob: 50, received: 5, issued: 4, consumed: 6, cb: 45 },
                Coolant: { ob: 30, received: 7, issued: 3, consumed: 5, cb: 29 },
                Compound: { ob: 20, received: 2, issued: 2, consumed: 3, cb: 17 },
              },
            ]),
          10
        )
      );

      setData(response);
    }

    fetchOilReportData();
  }, []);

  // Define oil types and sub-headings
  const oilTypes = ["HSD", "15W40", "HYD68", "Grease", "Coolant", "Compound"];
  const subHeadings = ["O/B", "Received", "Issued", "Consumed", "C/B"];

  // Define background colors for each oil type
  const oilColors = {
    HSD: "bg-red-300",
    "15W40": "bg-yellow-300",
    HYD68: "bg-green-300",
    Grease: "bg-blue-300",
    Coolant: "bg-purple-300",
    Compound: "bg-pink-300",
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white text-sm">
          <thead>
            {/* Oil Type Headers (Colored Background) */}
            <tr>
              <th rowSpan={2} className="border px-4 py-2 text-center bg-gray-300">
                Date
              </th>
              {oilTypes.map((oil) => (
                <th
                  key={oil}
                  colSpan={5}
                  className={`border px-4 py-2 text-center text-white ${oilColors[oil]}`}
                >
                  {oil}
                </th>
              ))}
            </tr>
            {/* Sub-Headers */}
            <tr className="bg-gray-200">
              {oilTypes.flatMap((oil) =>
                subHeadings.map((sub) => (
                  <th key={`${oil}-${sub}`} className="border px-4 py-2 text-center">
                    {sub}
                  </th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className="border-b text-center">
                <td className="border px-4 py-2 font-semibold">{entry.date}</td>
                {oilTypes.flatMap((oil) =>
                  subHeadings.map((sub) => (
                    <td key={`${oil}-${sub}-${index}`} className="border px-4 py-2">
                      {entry[oil]?.[sub.toLowerCase()] ?? "-"}
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OilReportTable;


