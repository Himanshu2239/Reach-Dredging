// "use client"

// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import { useRouter } from "next/navigation";

// const page = () => {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if(!token){
//       toast.error('Authorization failed')
//       router.push('/login');
//       return;
//     }
//     const fetchReports = async () => {
//       try {
//         setLoading(true);  // Show loading state
//         const response = await fetch("https://reach-backend.vercel.app/operator/getOperatorReport", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setReports(data);
//       } catch (error) {
//         console.error("Error fetching operator reports:", error);
//       } finally {
//         setLoading(false);  // Hide loading state once data is fetched
//       }
//     };

//     fetchReports();
//   }, []);

//   const formatValue = (value) => (value === null || value === undefined || value === "" ? "-" : value);

//   return (
//     <div>
//        <Header/>
//       <h1 className="text-xl pt-[6rem] ml-2 font-bold mb-4">Operator Reports</h1>
//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border border-gray-300 px-4 py-2">Date</th>
//                 <th className="border border-gray-300 px-4 py-2">Shift</th>
//                 <th className="border border-gray-300 px-4 py-2">Dredger</th>
//                 <th className="border border-gray-300 px-4 py-2">Dredging Duration (hh:mm)</th>
//                 <th className="border border-gray-300 px-4 py-2">Production</th>
//                 <th className="border border-gray-300 px-4 py-2">Work Log</th>
//                 <th className="border border-gray-300 px-4 py-2">Oil Report</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reports.map((report) => (
//                 <tr key={report._id} className="hover:bg-gray-50">
//                   <td className="border border-gray-300 px-2 py-2">{formatValue(report.date)}</td>
//                   <td className="border border-gray-300 px-4 py-2">{formatValue(report.shift)}</td>
//                   <td className="border border-gray-300 px-4 py-2">{formatValue(report.dredger)}</td>
//                   <td className="border border-gray-300 px-4 py-2">{formatValue(report.dredgingDuration)}</td>
//                   <td className="border border-gray-300 px-4 py-2">{formatValue(report.production)}</td>

//                   {/* Work Log Section as a sub-table */}
//                   <td className="border border-gray-300 px-4 py-2">
//                     <div>
//                       <h3 className="font-semibold text-gray-800">Work Log</h3>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-max table-auto border-collapse border border-gray-300 text-sm">
//                           <thead>
//                             <tr className="bg-gray-200">
//                               <th className="border border-gray-300 px-4 py-2">Forward</th>
//                               <th className="border border-gray-300 px-4 py-2">Swing</th>
//                               <th className="border border-gray-300 px-4 py-2">Depth</th>
//                               <th className="border border-gray-300 px-4 py-2">ME Reading</th>
//                               <th className="border border-gray-300 px-4 py-2">AE Reading</th>
//                               <th className="border border-gray-300 px-4 py-2">DG Reading</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr className="hover:bg-gray-50">
//                               <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.forward)}</td>
//                               <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.swing)}</td>
//                               <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.depth)}</td>
//                               <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.meReading)}</td>
//                               <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.aeReading)}</td>
//                               <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.dgReading)}</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                       <div>
//                         <strong>Entries:</strong>
//                         <ul className="ml-4">
//                           {report.workLog.entries.map((entry) => (
//                             <li key={entry._id}>
//                               {entry.startTime} - {entry.endTime}, {entry.workType} ({entry.duration} min)
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </td>

//                   {/* Oil Report Section as a sub-table */}
//                   <td className="border border-gray-300 px-4 py-2">
//                     <div>
//                       <h3 className="font-semibold text-gray-800"></h3>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-max table-auto border-collapse border border-gray-300 text-sm">
//                           <thead>
//                             <tr className="bg-gray-200">
//                               <th className="border border-gray-300 px-4 py-2">Oil Type</th>
//                               <th className="border border-gray-300 px-4 py-2">OB</th>
//                               <th className="border border-gray-300 px-4 py-2">Received</th>
//                               <th className="border border-gray-300 px-4 py-2">Issued</th>
//                               <th className="border border-gray-300 px-4 py-2">Consumed</th>
//                               <th className="border border-gray-300 px-4 py-2">Balance</th>
//                               <th className="border border-gray-300 px-4 py-2">Remarks</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {report.oilReport.map((oil) => (
//                               <tr key={oil._id} className="hover:bg-gray-50">
//                                 <td className="border border-gray-300 px-4 py-2">{oil.name}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{formatValue(oil.OB)}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{formatValue(oil.received)}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{formatValue(oil.issued)}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{formatValue(oil.consumed)}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{formatValue(oil.balance)}</td>
//                                 <td className="border border-gray-300 px-4 py-2">{formatValue(oil.remarks)}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default page;



"use client"

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

const page = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

   const reverseDate = (str) => {
    const arr = str.split('-');
    return arr.reverse().join('-');
}

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if(!token){
      toast.error('Authorization failed')
      router.push('/login');
      return;
    }
    const fetchReports = async () => {
      try {
        setLoading(true);  // Show loading state
        const response = await fetch("https://reach-backend.vercel.app/getOperatorReport", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Error fetching operator reports:", error);
      } finally {
        setLoading(false);  // Hide loading state once data is fetched
      }
    };

    fetchReports();
  }, []);

  
  const formatValue = (value) => (value === null || value === undefined || value === "" ? "-" : value);

  return (
    <div>
       <Header/>
      <h1 className="text-xl pt-[6rem] ml-4 font-bold mb-4">Operator Reports</h1>
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto m-4 rounded-lg">
          <table className="min-w-full table-auto whitespace-nowrap border-collapse border border-gray-300 text-sm">
            <thead className="bg-blue-500 text-white h-20">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Shift</th>
                <th className="border border-gray-300 px-4 py-2">Dredger</th>
                <th className="border border-gray-300 px-4 py-2">Dredging Duration (hh:mm)</th>
                <th className="border border-gray-300 px-4 py-2">Production</th>
                <th className="border border-gray-300 px-4 py-2">Work Log</th>
                <th className="border border-gray-300 px-4 py-2">Oil Report</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-2 py-2">{reverseDate(formatValue(report.date))}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatValue(report.shift)}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatValue(report.dredger)}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatValue(report.dredgingDuration)}</td>
                  <td className="border border-gray-300 px-4 py-2">{formatValue(report.production)}</td>

                  {/* Work Log Section as a sub-table */}
                  <td className="border border-gray-300 px-4 py-2">
                    <div>
                      {/* <h3 className="font-semibold text-gray-800">Work Log</h3> */}
                      <div className="overflow-x-auto">
                        <table className="min-w-max table-auto border-collapse border border-gray-300 text-sm">
                          <thead>
                            <tr className="bg-blue-500 text-white">
                              <th className="border border-gray-300 px-4 py-2">Forward</th>
                              <th className="border border-gray-300 px-4 py-2">Swing</th>
                              <th className="border border-gray-300 px-4 py-2">Depth</th>
                              <th className="border border-gray-300 px-4 py-2">ME Reading</th>
                              <th className="border border-gray-300 px-4 py-2">AE Reading</th>
                              <th className="border border-gray-300 px-4 py-2">LC Reading</th>
                              <th className="border border-gray-300 px-4 py-2">DG Reading</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="hover:bg-gray-50">
                              <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.forward)}</td>
                              <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.swing)}</td>
                              <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.depth)}</td>
                              <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.meReading)}</td>
                              <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.aeReading)}</td>
                              <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.lcReading)}</td>
                              <td className="border border-gray-300 px-4 py-2">{formatValue(report.workLog.dgReading)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <strong>Entries:</strong>
                        <ul className="ml-4">
                          {report.workLog.entries.map((entry) => (
                            <li key={entry._id}>
                              {entry.startTime} - {entry.endTime}, {entry.workType} ({entry.duration} min)
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </td>

                  {/* Oil Report Section as a sub-table */}
                  <td className="border border-gray-300 px-4 py-2">
                    <div>
                      <h3 className="font-semibold text-gray-800"></h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-max table-auto border-collapse border border-gray-300 text-sm">
                          <thead>
                            <tr className="bg-blue-500 text-white">
                              <th className="border border-gray-300 px-4 py-2">Oil Type</th>
                              <th className="border border-gray-300 px-4 py-2">OB</th>
                              <th className="border border-gray-300 px-4 py-2">Received</th>
                              <th className="border border-gray-300 px-4 py-2">Issued</th>
                              <th className="border border-gray-300 px-4 py-2">Consumed</th>
                              <th className="border border-gray-300 px-4 py-2">Balance</th>
                              <th className="border border-gray-300 px-4 py-2">Remarks</th>
                            </tr>
                          </thead>
                          <tbody>
                            {report.oilReport.map((oil) => (
                              <tr key={oil._id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{oil.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{formatValue(oil.OB)}</td>
                                <td className="border border-gray-300 px-4 py-2">{formatValue(oil.received)}</td>
                                <td className="border border-gray-300 px-4 py-2">{formatValue(oil.issued)}</td>
                                <td className="border border-gray-300 px-4 py-2">{formatValue(oil.consumed)}</td>
                                <td className="border border-gray-300 px-4 py-2">{formatValue(oil.balance)}</td>
                                <td className="border border-gray-300 px-4 py-2">{formatValue(oil.remarks)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default page;



