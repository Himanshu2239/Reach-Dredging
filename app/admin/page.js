
// "use client"

// // import { useState } from "react";
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // const dredgers = ["K7", "K9", "K14", "K15"];

// // export default function Dashboard() {
// //   const [date, setDate] = useState("");
// //   const [selectedDredger, setSelectedDredger] = useState("K7");

// //   const data = [
// //     { date: "22 Jul", production: 4000 },
// //     { date: "23 Jul", production: 3000 },
// //     { date: "24 Jul", production: 5000 },
// //     { date: "25 Jul", production: 4500 },
// //   ];

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <div className="flex flex-wrap justify-between mb-6">
// //         <input
// //           type="date"
// //           className="p-2 border rounded-md"
// //           value={date}
// //           onChange={(e) => setDate(e.target.value)}
// //         />
// //         <select
// //           className="p-2 border rounded-md"
// //           value={selectedDredger}
// //           onChange={(e) => setSelectedDredger(e.target.value)}
// //         >
// //           {dredgers.map((dredger) => (
// //             <option key={dredger} value={dredger}>{dredger}</option>
// //           ))}
// //         </select>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         <div className="bg-white p-4 rounded-lg shadow">
// //           <h2 className="text-lg font-semibold">Production</h2>
// //           <p className="text-2xl font-bold">{selectedDredger} - 12000 m³</p>
// //         </div>

// //         <div className="bg-white p-4 rounded-lg shadow">
// //           <h2 className="text-lg font-semibold">Operator (Production)</h2>
// //           <p className="text-2xl font-bold">John Doe</p>
// //         </div>

// //         <div className="bg-white p-4 rounded-lg shadow">
// //           <h2 className="text-lg font-semibold">Oil Report</h2>
// //           <p className="text-2xl font-bold">HSD: 500L</p>
// //         </div>
// //       </div>

// //       <div className="bg-white p-6 mt-6 rounded-lg shadow">
// //         <h2 className="text-lg font-semibold mb-4">Production Analytics</h2>
// //         <ResponsiveContainer width="100%" height={300}>
// //           <LineChart data={data}>
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="date" />
// //             <YAxis />
// //             <Tooltip />
// //             <Line type="monotone" dataKey="production" stroke="#8884d8" strokeWidth={2} />
// //           </LineChart>
// //         </ResponsiveContainer>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { FaIndustry, FaUserCog, FaOilCan } from "react-icons/fa";
// import { Divide } from "lucide-react";
// import Header from "../components/Header";

// const dredgers = ["K7", "K9", "K14", "K15"];

// export default function Dashboard() {
//   const [date, setDate] = useState("");
//   const [selectedDredger, setSelectedDredger] = useState("K7");

//   const productionData = [
//     { date: "22 Jul", production: 4000 },
//     { date: "23 Jul", production: 3000 },
//     { date: "24 Jul", production: 5000 },
//     { date: "25 Jul", production: 4500 },
//   ];

//   const oilData = [
//     { date: "22 Jul", oil: 200 },
//     { date: "23 Jul", oil: 250 },
//     { date: "24 Jul", oil: 180 },
//     { date: "25 Jul", oil: 220 },
//   ];

//   const images = [
//     "/image_1.jpeg",
//     "/image_2.jpeg",
//     "/image_3.jpeg",
//     // "/image-4.jpeg",
//   ];

//   return (
//     <div>
//         <Header/>
//     <div className="p-6 pt-[5rem] bg-gray-100  min-h-screen">
//       <div className="flex flex-wrap justify-between mb-6">
//         <input
//           type="date"
//           className="p-2 border rounded-md"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <select
//           className="p-2 border rounded-md"
//           value={selectedDredger}
//           onChange={(e) => setSelectedDredger(e.target.value)}
//         >
//           {dredgers.map((dredger) => (
//             <option key={dredger} value={dredger}>{dredger}</option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//           <FaIndustry size={40} className="mb-2 text-gray-600" />
//           <h2 className="text-lg font-semibold">Production</h2>
//           <p className="text-2xl font-bold">{selectedDredger} - 12000 m³</p>
//           <p className="text-sm text-gray-500">Today: 2000 m³ | Till Date: 50000 m³</p>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//           <FaUserCog size={40} className="mb-2 text-gray-600" />
//           <h2 className="text-lg font-semibold">Operator (Production)</h2>
//           <p className="text-2xl font-bold">John Doe</p>
//           <p className="text-sm text-gray-500">Dredger: {selectedDredger}</p>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
//           <FaOilCan size={40} className="mb-2 text-gray-600" />
//           <h2 className="text-lg font-semibold">Oil Report</h2>
//           <p className="text-2xl font-bold">HSD: 500L</p>
//           <p className="text-sm text-gray-500">Today: 50L | Till Date: 2000L</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold mb-4">Production Analytics</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={productionData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="production" stroke="#8884d8" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-semibold mb-4">Oil Consumption Analytics</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={oilData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="oil" stroke="#ff7300" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// "use client"

// import { useState, useEffect } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { FaIndustry, FaUserCog, FaOilCan } from "react-icons/fa";
// import Header from "../components/Header";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";
// import TotalProductionReport from "../components/TotalProduction";
// import DykeReportTable from "../components/DykeReportTable";
// import BlockWiseReport from "../components/BlockWiseReport";
// // import { Card, CardContent } from '@/components/ui/card';
// // import { DatePicker } from '@/components/ui/datepicker'

// const dredgers = ["K7", "K9", "K14", "K15", "All"];

// export default function Dashboard() {
//   const [date, setDate] = useState('');
//   const [selectedDredger, setSelectedDredger] = useState("All");
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [monthlyData, setMonthlyData] = useState({})
//   const [selectedView, setSelectedView] = useState("Survey"); // Default to Survey
//   const [showDateRange, setShowDateRange] = useState(false);
  





//   const fetchData = async () => {
//     let requestData = {};
//     let dredger;
//     if (selectedDredger)
//       dredger = selectedDredger;

//     if (!date && !startDate && !endDate) {
//       // Case 1: Nothing selected, fetch default data
//       requestData = { type: 'single', dredger };
//     }
//     else if(date && startDate && endDate && dredger){
//       requestData = {type: 'range', date, startDate, endDate, dredger};
//     }
//     else if (startDate && endDate && dredger) {
//       // Case 3: Date range and dredger selected
//       requestData = { type: 'range', startDate, endDate, dredger };
//     } 
//     else if (date && dredger) {
//       // Case 2: Single date and dredger selected
//       requestData = { type: 'single', date, dredger };
//     } 
//     else if (dredger) {
//       requestData = { type: 'single', dredger };
//     }
//     else {
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:5000/common/getAdminAllData', requestData, {
//         headers: { 'Content-Type': 'application/json' },
//       });
//       // console.log("surveyMontlyProduction", response.data.monthlyData.
//       //   surveyProduction
//       // );
//       console.log("data", response.data);
//       setDate(response.data.date)
//       setData(response.data);
//       setMonthlyData(response.data.monthlyData)
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

   

//   useEffect(() => {
//     fetchData();
//   }, [date, startDate, endDate, selectedDredger]);

//   const productionData = [
//     { date: "22 Jul", production: 4000, data: 200 },
//     { date: "23 Jul", production: 3000 },
//     { date: "24 Jul", production: 2000 },
//     { date: "25 Jul", production: 4500 },
//     { date: "27 Jul", production: 4000 },
//     { date: "28 Jul", production: 3000 },
//     { date: "29 Jul", production: 5000 },
//     { date: "30 Jul", production: 4500 },
//     { date: "31 Jul", production: 4000 },
//     { date: "01 Aug", production: 3000 },
//     { date: "02 Aug", production: 5000 },
//     // { date: "25 Jul", production: 4500 },
//     // { date: "22 Jul", production: 4000 },
//     // { date: "23 Jul", production: 3000 },
//     // { date: "24 Jul", production: 5000 },
//     // { date: "25 Jul", production: 4500 },
//     // { date: "22 Jul", production: 4000 },
//     // { date: "23 Jul", production: 3000 },
//     // { date: "24 Jul", production: 5000 },
//     // { date: "25 Jul", production: 4500 },
//   ];

//   const oilData = [
//     { date: "22 Jul", oil: 200 },
//     { date: "23 Jul", oil: 250 },
//     { date: "24 Jul", oil: 180 },
//     { date: "25 Jul", oil: 220 },
//   ];

//   if (loading) {
//     return <>loading...</>
//   }
//   return (
//     <div className="">
//       <Header />
//       <div className="p-6 pt-[5rem] bg-gray-100 min-h-screen">
//         {/* <div className="md:flex md:flex-row flex-col  justify-between items-center mb-6 bg-white p-4 rounded-lg shadow">
//           <div>
//             <label className="mr-2 font-semibold">Date:</label>
//             <input
//               type="date"
//               className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <label className="ml-6 mr-2 font-semibold">Dredger:</label>
//             <select
//               className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedDredger}
//               onChange={(e) => setSelectedDredger(e.target.value)}
//             >
//               {dredgers.map((dredger) => (
//                 <option key={dredger} value={dredger}>{dredger}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="ml-4 mr-2 font-semibold">Date range:</label>
//             <input
//               type="date"
//               className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//             <label className="ml-4 mr-2 font-semibold">to:</label>
//             <input
//               type="date"
//               className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="ml-6 mr-2 font-semibold">View:</label>
//             <select
//               className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
//               value={selectedView}
//               onChange={(e) => setSelectedView(e.target.value)}
//             >
//               <option value="Survey">Survey</option>
//               <option value="Operator">Operator</option>
//             </select>
//           </div>
//         </div> */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow w-full">
//           <div className="w-full md:w-auto mb-4 md:mb-0">
//             <label className="mr-2 font-semibold">Date:</label>
//             <input
//               type="date"
//               className="p-2 border rounded-md w-1/3 md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <label className="ml-6 mr-2 font-semibold">Dredger:</label>
//             <select
//               className="p-2 border rounded-md w-[5rem] md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={selectedDredger}
//               onChange={(e) => setSelectedDredger(e.target.value)}
//             >
//               {dredgers.map((dredger) => (
//                 <option key={dredger} value={dredger}>{dredger}</option>
//               ))}
//             </select>
//           </div>

//           <div className="w-full md:w-auto mb-4 md:mb-0">
//             {/* <button
//               className="p-2 bg-blue-500 text-white rounded-md md:hidden w-full mb-2"
//               onClick={() => setShowDateRange(!showDateRange)}
//             >
//               Toggle Date Range
//             </button> */}
//             <div className="md:flex md:items-center">
//               <label className="ml-4 mr-2 font-semibold">Range:</label>
//               <input
//                 type="date"
//                 className="p-2 border rounded-md w-[8rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//               <label className="ml-4 mr-2 font-semibold">to:</label>
//               <input
//                 type="date"
//                 className="p-2 border rounded-md w-[8rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="w-full md:w-auto">
//             <label className="ml-6 mr-2 font-semibold">View:</label>
//             <select
//               className="p-2 border rounded-md w-1/3 md:w-auto focus:ring-2 focus:ring-blue-500"
//               value={selectedView}
//               onChange={(e) => setSelectedView(e.target.value)}
//             >
//               <option value="Survey">Survey</option>
//               <option value="Operator">Operator</option>
//             </select>
//           </div>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* <div className="bg-blue-100 p-4 rounded-lg shadow flex flex-col items-center">
//             <FaIndustry size={40} className="mb-2 text-blue-600" />
//             <h2 className="text-lg font-semibold">Production</h2>
//             <p className="text-xl font-bold">{selectedDredger} - {data.
//               surveyProduction
//             }  m³ - {data.surveyProductionPerHour

//               } per/hr</p>
//               <p className="text-xl font-bold">Montly - {monthlyData.surveyProduction
//             }  m³ - {monthlyData.surveyProductionPerHour

//               } per/hr</p>
//             <p className="text-lg text-gray-700">Hours:{data.
//               productionHours} | 
//               Till Date: {monthlyData.surveyProduction
//               } m³</p>
//           </div> */}

//           {selectedView === 'Survey' && <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
//             <FaIndustry size={48} className="text-blue-600" />
//             <h2 className="text-2xl font-semibold text-gray-800">Production</h2>
//             <div className="grid grid-cols-2 gap-6 w-full text-center">

//               <div className="bg-blue-100 p-4 rounded-lg shadow-md">
//                 <h3 className="text-lg font-semibold text-blue-700">Today</h3>
//                 <p className="text-xl font-bold text-gray-800">
//                   {selectedDredger} - {data.surveyProduction} m³
//                 </p>
//                 <p className="text-lg font-medium text-gray-600">
//                   {data.surveyProductionPerHour} per/hr
//                 </p>
//                 <p className="text-sm text-gray-600">Hours: {data.productionHours}</p>
//               </div>


//               <div className="bg-green-100 p-4 rounded-lg shadow-md">
//                 <h3 className="text-lg font-semibold text-green-700">Monthly</h3>
//                 <p className="text-xl font-bold text-gray-800">
//                   {monthlyData.surveyProduction} m³
//                 </p>
//                 <p className="text-lg font-medium text-gray-600">
//                   {monthlyData.surveyProductionPerHour} per/hr
//                 </p>
//                 <p className="text-sm text-gray-600">Hours: {monthlyData.productionHours} </p>
//               </div>
//             </div>
//           </div>}

//           {/* <div className="bg-blue-100 ">

//         </div> */}

//           {/* <div className="bg-green-100 p-4 rounded-lg shadow flex flex-col items-center">
//             <FaUserCog size={40} className="mb-2 text-green-600" />
//             <h2 className="text-lg font-semibold">Operator (Production)</h2>
//             <p className="text-xl font-bold">{selectedDredger} - 1200 m³ - 120 per/hr</p>
//             <p className="text-lg text-gray-700">Hours: 8:30 | Till Date: 5000 m³</p>
//           </div> */}


//           {selectedView === 'Operator' && <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
//             <FaUserCog size={48} className="text-green-600" />
//             <h2 className="text-2xl font-semibold text-gray-800">Operator (Production)</h2>
//             <div className="grid grid-cols-2 gap-6 w-full text-center">
//               <div className="bg-green-100 p-4 rounded-lg shadow-md">
//                 <h3 className="text-lg font-semibold text-green-700">Today</h3>
//                 <p className="text-xl font-bold text-gray-800">
//                   {selectedDredger} - {data.operatorProduction} m³
//                 </p>
//                 <p className="text-lg font-medium text-gray-600">
//                   {data.operatorProductionPerHour} per/hr
//                 </p>
//                 <p className="text-sm text-gray-600">Hours: {data.productionHours}</p>
//               </div>

//               <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
//                 <h3 className="text-lg font-semibold text-yellow-700">Monthly</h3>
//                 <p className="text-xl font-bold text-gray-800">
//                   {monthlyData.operatorProduction} m³
//                 </p>
//                 <p className="text-lg font-medium text-gray-600">
//                   {monthlyData.operatorProductionPerHour} per/hr
//                 </p>
//                 <p className="text-sm text-gray-600">Hours: {monthlyData.productionHours}</p>
//               </div>
//             </div>
//           </div>}

//           {/* <div className="bg-orange-100 p-4 rounded-lg shadow flex flex-col items-center">
//             <FaOilCan size={40} className="mb-2 text-orange-600" />
//             <h2 className="text-lg font-semibold">Oil Report</h2>
//             <p className="text-xl font-bold">HSD: 500L</p>
//             <p className="text-lg text-gray-600">Today: 50L | Till Date: 2000L</p>
//           </div> */}

//           <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
//             <FaOilCan size={48} className="text-orange-600" />
//             <h2 className="text-2xl font-semibold text-gray-800">Oil Report</h2>
//             <div className="grid grid-cols-2 gap-6 w-full text-center">
//               {/* Today’s Oil Consumption */}
//               <div className="bg-orange-100 p-4 rounded-lg shadow-md">
//                 <h3 className="text-lg font-semibold text-orange-700">Today</h3>
//                 <p className="text-xl font-bold text-gray-800">
//                   HSD: {data.operatorOilConsumed} L
//                 </p>
//                 <p className="text-lg text-gray-600">Total Usage: {data.operatorOilConsumed} L</p>
//               </div>

//               {/* Monthly Oil Consumption */}
//               <div className="bg-red-100 p-4 rounded-lg shadow-md">
//                 <h3 className="text-lg font-semibold text-red-700">Monthly</h3>
//                 <p className="text-xl font-bold text-gray-800">
//                   HSD: {monthlyData.operatorOilConsumed} L
//                 </p>
//                 <p className="text-lg text-gray-600">Total Usage: {monthlyData.operatorOilConsumed} L</p>
//               </div>
//             </div>
//           </div>
//           {/* <div className="bg-orange-100 p-4 rounded-lg shadow flex flex-col items-center">
//             <FaOilCan size={40} className="mb-2 text-orange-600" />
//             <h2 className="text-lg font-semibold">Oil Report</h2>
//             <p className="text-xl font-bold">HSD: 500L</p>
//             <p className="text-lg text-gray-600">Today: 50L | Till Date: 2000L</p>
//           </div> */}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold mb-4">Production Analytics</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={productionData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="production" stroke="#8884d8" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold mb-4">Oil Consumption Analytics</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={oilData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="oil" stroke="#ff7300" strokeWidth={2} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div>
//             <TotalProductionReport />
//             <BlockWiseReport/>
//           </div>
//           <div>
//             <DykeReportTable />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FaIndustry, FaUserCog, FaOilCan } from "react-icons/fa";
import Header from "../components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import TotalProductionReport from "../components/TotalProduction";
import DykeReportTable from "../components/DykeReportTable";
import BlockWiseReport from "../components/BlockWiseReport";
import SurveyProductionGraph from "../components/Graph/SurveyProduction";
import OperatorProductionGraph from "../components/Graph/OperatorProduction";
// import { Card, CardContent } from '@/components/ui/card';
// import { DatePicker } from '@/components/ui/datepicker'

const dredgers = ["K7", "K9", "K14", "K15", "All"];

export default function Dashboard() {
  const [date, setDate] = useState('');
  const [selectedDredger, setSelectedDredger] = useState("All");
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [monthlyData, setMonthlyData] = useState({})
  const [selectedView, setSelectedView] = useState("Survey"); // Default to Survey
  const [showMonth, SetShowMonth] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);
  





  const fetchData = async () => {
    let requestData = {};
    let dredger;
    if (selectedDredger)
      dredger = selectedDredger;

    if (!date && !startDate && !endDate) {
      // Case 1: Nothing selected, fetch default data
      requestData = { type: 'single', dredger };
    }
    else if(date && startDate && endDate && dredger){
      requestData = {type: 'range', date, startDate, endDate, dredger};
    }
    else if (startDate && endDate && dredger) {
      // Case 3: Date range and dredger selected
      requestData = { type: 'range', startDate, endDate, dredger };
    } 
    else if (date && dredger) {
      // Case 2: Single date and dredger selected
      requestData = { type: 'single', date, dredger };
    } 
    else if (dredger) {
      requestData = { type: 'single', dredger };
    }
    else {
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/common/getAdminAllData', requestData, {
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log("surveyMontlyProduction", response.data.monthlyData.
      //   surveyProduction
      // );
      // console.log("data", response.data);
      setDate(response.data.date)
      setData(response.data);
      setMonthlyData(response.data.monthlyData)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   

  useEffect(() => {
    fetchData();
    if(startDate && endDate)
     SetShowMonth(false);
    else
     SetShowMonth(true)
  }, [date, startDate, endDate, selectedDredger]);

  const productionData = [
    { date: "22-03", production: 4000 },
    { date: "23 July", production: 3000 },
    { date: "24 Jul", production: 2000 },
    { date: "25 Jul", production: 4500 },
    { date: "27 Jul", production: 4000 },
    { date: "28 Jul", production: 3000 },
    { date: "29 Jul", production: 5000 },
    { date: "30 Jul", production: 4500 },
    { date: "31 Jul", production: 4000 },
    { date: "01 Aug", production: 3000 },
    { date: "02 Aug", production: 5000 },
    // { date: "25 Jul", production: 4500 },
    // { date: "22 Jul", production: 4000 },
    // { date: "23 Jul", production: 3000 },
    // { date: "24 Jul", production: 5000 },
    // { date: "25 Jul", production: 4500 },
    // { date: "22 Jul", production: 4000 },
    // { date: "23 Jul", production: 3000 },
    // { date: "24 Jul", production: 5000 },
    // { date: "25 Jul", production: 4500 },
  ];


  // const productionData = [
  //   { date: "22 Jul", production: 4000 },
  //   { date: "23 Jul", production: 3000 },
  //   { date: "24 Jul", production: 2000 },
  //   { date: "25 Jul", production: 4500 },
  //   { date: "26 Jul", production: 3800 },
  //   { date: "27 Jul", production: 4000 },
  //   { date: "28 Jul", production: 3000 },
  //   { date: "29 Jul", production: 5000 },
  //   { date: "30 Jul", production: 4500 },
  //   { date: "31 Jul", production: 4000 },
  //   { date: "01 Aug", production: 3000 },
  //   { date: "02 Aug", production: 5000 },
  //   { date: "03 Aug", production: 4200 },
  //   { date: "04 Aug", production: 3900 },
  //   { date: "05 Aug", production: 3700 },
  //   { date: "06 Aug", production: 4100 },
  //   { date: "07 Aug", production: 4600 },
  //   { date: "08 Aug", production: 4400 },
  //   { date: "09 Aug", production: 4300 },
  //   { date: "10 Aug", production: 3000 },
  //   { date: "11 Aug", production: 3200 },
  //   { date: "12 Aug", production: 3100 },
  //   { date: "13 Aug", production: 2800 },
  //   { date: "14 Aug", production: 3500 },
  //   { date: "15 Aug", production: 3700 },
  //   { date: "16 Aug", production: 3900 },
  //   { date: "17 Aug", production: 4000 },
  //   { date: "18 Aug", production: 4200 },
  //   { date: "19 Aug", production: 4500 },
  //   { date: "20 Aug", production: 4600 },
  //   { date: "21 Aug", production: 4700 },
  //   { date: "22 Aug", production: 4300 },
  //   { date: "23 Aug", production: 4100 },
  //   { date: "24 Aug", production: 3600 },
  //   { date: "25 Aug", production: 3400 },
  //   { date: "26 Aug", production: 3000 },
  //   { date: "27 Aug", production: 2800 },
  //   { date: "28 Aug", production: 2700 },
  //   { date: "29 Aug", production: 3500 },
  //   { date: "30 Aug", production: 3900 },
  //   { date: "31 Aug", production: 4200 },
  //   { date: "01 Sep", production: 4300 },
  //   { date: "02 Sep", production: 4500 },
  //   { date: "03 Sep", production: 4700 },
  //   { date: "04 Sep", production: 4900 },
  //   { date: "05 Sep", production: 5000 },
  //   { date: "06 Sep", production: 5100 },
  //   { date: "07 Sep", production: 4800 },
  //   { date: "08 Sep", production: 4600 },
  //   { date: "09 Sep", production: 4400 },
  //   { date: "10 Sep", production: 4200 },
  //   { date: "11 Sep", production: 4000 },
  //   { date: "12 Sep", production: 3800 },
  //   { date: "13 Sep", production: 3700 },
  //   { date: "14 Sep", production: 3900 },
  //   { date: "15 Sep", production: 4100 },
  //   { date: "16 Sep", production: 4300 },
  //   { date: "17 Sep", production: 4500 },
  //   { date: "18 Sep", production: 4700 },
  //   { date: "19 Sep", production: 4900 },
  //   { date: "20 Sep", production: 5000 },
  //   { date: "21 Sep", production: 5100 },
  //   { date: "22 Sep", production: 5200 },
  //   { date: "23 Sep", production: 5300 },
  //   { date: "24 Sep", production: 5400 },
  //   { date: "25 Sep", production: 5500 },
  //   { date: "26 Sep", production: 5600 },
  //   { date: "27 Sep", production: 5700 },
  //   { date: "28 Sep", production: 5800 },
  //   { date: "29 Sep", production: 5900 },
  //   { date: "30 Sep", production: 6000 },
  //   { date: "01 Oct", production: 6100 },
  //   { date: "02 Oct", production: 6200 },
  //   { date: "03 Oct", production: 6300 },
  //   { date: "04 Oct", production: 6400 },
  //   { date: "05 Oct", production: 6500 },
  //   { date: "06 Oct", production: 6600 },
  //   { date: "07 Oct", production: 6700 },
  //   { date: "08 Oct", production: 6800 },
  //   { date: "09 Oct", production: 6900 },
  //   { date: "10 Oct", production: 7000 },
  //   { date: "11 Oct", production: 7100 },
  //   { date: "12 Oct", production: 7200 },
  //   { date: "13 Oct", production: 7300 },
  //   { date: "14 Oct", production: 7400 },
  //   { date: "15 Oct", production: 7500 },
  //   { date: "16 Oct", production: 7600 },
  //   { date: "17 Oct", production: 7700 },
  //   { date: "18 Oct", production: 7800 },
  //   { date: "19 Oct", production: 7900 },
  //   { date: "20 Oct", production: 8000 },
  //   { date: "21 Oct", production: 8100 },
  //   { date: "22 Oct", production: 8200 },
  //   { date: "23 Oct", production: 8300 },
  //   { date: "24 Oct", production: 8400 },
  //   { date: "25 Oct", production: 8500 },
  //   { date: "26 Oct", production: 8600 },
  //   { date: "27 Oct", production: 8700 },
  //   { date: "28 Oct", production: 8800 },
  //   { date: "29 Oct", production: 8900 },
  //   { date: "30 Oct", production: 9000 }
  // ];

  const oilData = [
    { date: "22 Jul", oil: 200 },
    { date: "23 Jul", oil: 250 },
    { date: "24 Jul", oil: 180 },
    { date: "25 Jul", oil: 220 },
  ];

  if (loading) {
    return <>loading...</>
  }
  return (
    <div className="">
      <Header />
      <div className="p-6 pt-[5rem] bg-gray-100 min-h-screen">
        {/* <div className="md:flex md:flex-row flex-col  justify-between items-center mb-6 bg-white p-4 rounded-lg shadow">
          <div>
            <label className="mr-2 font-semibold">Date:</label>
            <input
              type="date"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label className="ml-6 mr-2 font-semibold">Dredger:</label>
            <select
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedDredger}
              onChange={(e) => setSelectedDredger(e.target.value)}
            >
              {dredgers.map((dredger) => (
                <option key={dredger} value={dredger}>{dredger}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="ml-4 mr-2 font-semibold">Date range:</label>
            <input
              type="date"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label className="ml-4 mr-2 font-semibold">to:</label>
            <input
              type="date"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <label className="ml-6 mr-2 font-semibold">View:</label>
            <select
              className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={selectedView}
              onChange={(e) => setSelectedView(e.target.value)}
            >
              <option value="Survey">Survey</option>
              <option value="Operator">Operator</option>
            </select>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow w-full">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <label className="mr-2 font-semibold">Date:</label>
            <input
              type="date"
              className="p-2 border rounded-md w-1/3 md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label className="ml-6 mr-2 font-semibold">Dredger:</label>
            <select
              className="p-2 border rounded-md w-[5rem] md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedDredger}
              onChange={(e) => setSelectedDredger(e.target.value)}
            >
              {dredgers.map((dredger) => (
                <option key={dredger} value={dredger}>{dredger}</option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-auto mb-4 md:mb-0">
            {/* <button
              className="p-2 bg-blue-500 text-white rounded-md md:hidden w-full mb-2"
              onClick={() => setShowDateRange(!showDateRange)}
            >
              Toggle Date Range
            </button> */}
            <div className="md:flex md:items-center">
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


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <div className="bg-blue-100 p-4 rounded-lg shadow flex flex-col items-center">
            <FaIndustry size={40} className="mb-2 text-blue-600" />
            <h2 className="text-lg font-semibold">Production</h2>
            <p className="text-xl font-bold">{selectedDredger} - {data.
              surveyProduction
            }  m³ - {data.surveyProductionPerHour

              } per/hr</p>
              <p className="text-xl font-bold">Montly - {monthlyData.surveyProduction
            }  m³ - {monthlyData.surveyProductionPerHour

              } per/hr</p>
            <p className="text-lg text-gray-700">Hours:{data.
              productionHours} | 
              Till Date: {monthlyData.surveyProduction
              } m³</p>
          </div> */}

          {selectedView === 'Survey' && <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
            <FaIndustry size={48} className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Production</h2>
            <div className="grid grid-cols-2 gap-6 w-full text-center">

              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-700">Today</h3>
                <p className="text-xl font-bold text-gray-800">
                  {selectedDredger} - {data.surveyProduction} m³
                </p>
                <p className="text-lg font-medium text-gray-600">
                  {data.surveyProductionPerHour} per/hr
                </p>
                <p className="text-sm text-gray-600">Hours: {data.productionHours}</p>
              </div>


              <div className="bg-green-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-700">{showMonth ? "Monthly" : "Date Range"}</h3>
                <p className="text-xl font-bold text-gray-800">
                  {monthlyData.surveyProduction} m³
                </p>
                <p className="text-lg font-medium text-gray-600">
                  {monthlyData.surveyProductionPerHour} per/hr
                </p>
                <p className="text-sm text-gray-600">Hours: {monthlyData.productionHours} </p>
              </div>
            </div>
          </div>}

          {/* <div className="bg-blue-100 ">

        </div> */}

          {/* <div className="bg-green-100 p-4 rounded-lg shadow flex flex-col items-center">
            <FaUserCog size={40} className="mb-2 text-green-600" />
            <h2 className="text-lg font-semibold">Operator (Production)</h2>
            <p className="text-xl font-bold">{selectedDredger} - 1200 m³ - 120 per/hr</p>
            <p className="text-lg text-gray-700">Hours: 8:30 | Till Date: 5000 m³</p>
          </div> */}


          {selectedView === 'Operator' && <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
            <FaUserCog size={48} className="text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Operator (Production)</h2>
            <div className="grid grid-cols-2 gap-6 w-full text-center">
              <div className="bg-green-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-700">Today</h3>
                <p className="text-xl font-bold text-gray-800">
                  {selectedDredger} - {data.operatorProduction} m³
                </p>
                <p className="text-lg font-medium text-gray-600">
                  {data.operatorProductionPerHour} per/hr
                </p>
                <p className="text-sm text-gray-600">Hours: {data.productionHours}</p>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-yellow-700">{showMonth ? "Monthly" : "Date Range"}</h3>
                <p className="text-xl font-bold text-gray-800">
                  {monthlyData.operatorProduction} m³
                </p>
                <p className="text-lg font-medium text-gray-600">
                  {monthlyData.operatorProductionPerHour} per/hr
                </p>
                <p className="text-sm text-gray-600">Hours: {monthlyData.productionHours}</p>
              </div>
            </div>
          </div>}

          {/* <div className="bg-orange-100 p-4 rounded-lg shadow flex flex-col items-center">
            <FaOilCan size={40} className="mb-2 text-orange-600" />
            <h2 className="text-lg font-semibold">Oil Report</h2>
            <p className="text-xl font-bold">HSD: 500L</p>
            <p className="text-lg text-gray-600">Today: 50L | Till Date: 2000L</p>
          </div> */}

          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 w-full">
            <FaOilCan size={48} className="text-orange-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Oil Report</h2>
            <div className="grid grid-cols-2 gap-6 w-full text-center">
              {/* Today’s Oil Consumption */}
              <div className="bg-orange-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-orange-700">Today</h3>
                <p className="text-xl font-bold text-gray-800">
                  HSD: {data.operatorOilConsumed} L
                </p>
                <p className="text-lg text-gray-600">Total Usage: {data.operatorOilConsumed} L</p>
              </div>

              {/* Monthly Oil Consumption */}
              <div className="bg-red-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-red-700">{showMonth ? "Monthly" : "Date Range"}</h3>
                <p className="text-xl font-bold text-gray-800">
                  HSD: {monthlyData.operatorOilConsumed} L
                </p>
                <p className="text-lg text-gray-600">Total Usage: {monthlyData.operatorOilConsumed} L</p>
              </div>
            </div>
          </div>
          {/* <div className="bg-orange-100 p-4 rounded-lg shadow flex flex-col items-center">
            <FaOilCan size={40} className="mb-2 text-orange-600" />
            <h2 className="text-lg font-semibold">Oil Report</h2>
            <p className="text-xl font-bold">HSD: 500L</p>
            <p className="text-lg text-gray-600">Today: 50L | Till Date: 2000L</p>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Production Analytics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="production" stroke="#8884d8" strokeWidth={2} />
               </LineChart>
            </ResponsiveContainer>
          </div> */}

        {selectedView === 'Survey' ? <SurveyProductionGraph 
         date={date}
         startDate={startDate}
         endDate={endDate}
         dredger={selectedDredger}
         /> :
         <OperatorProductionGraph
          date={date}
          startDate={startDate}
          endDate={endDate}
          dredger={selectedDredger}
         />}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Oil Consumption Analytics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={oilData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="oil" stroke="#ff7300" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {selectedView === "Survey" ?  (<div>
            <TotalProductionReport />
            <BlockWiseReport/>
          </div>) : ""}
          {selectedView === "Survey" && <div>
            <DykeReportTable />
          </div>}
        </div>
      </div>
    </div>
  );
}


