  // "use client";

  // import { useState } from "react";

  // const oilTypes = [
  //   { name: "H.S.D", initial: 100 },
  //   { name: "15 W 40", initial: 150 },
  //   { name: "H.Y.D.68", initial: 200 },
  //   { name: "Grease", initial: 50 },
  //   { name: "Coolant", initial: 75 },
  //   { name: "Compound", initial: 120 },
  // ];

  // const OilReportForm = () => {
  //   const [data, setData] = useState(
  //     oilTypes.map((oil) => ({
  //       ...oil,
  //       received: '',
  //       issued: '',
  //       Remarks: '',
  //       consumed: '',
  //       balance: oil.initial,
  //     }))
  //   );

  //   const handleChange = (index, field, value) => {
  //     const updatedData = [...data];

  //     // For Remarks, store the text as-is.
  //     // For numeric fields, store the raw value (which may be an empty string) so that the input isn't forced to show "0".
  //     updatedData[index][field] = value;

  //     // Convert numeric inputs for balance calculation.
  //     const receivedVal = parseFloat(updatedData[index].received) || 0;
  //     const consumedVal = parseFloat(updatedData[index].consumed) || 0;
  //     const issuedVal = parseFloat(updatedData[index].issued) || 0;

  //     updatedData[index].balance =
  //       updatedData[index].initial + receivedVal - consumedVal - issuedVal;

  //     setData(updatedData);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Submitted Oil Data:", data);
  //   };

  //   return (
  //     <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  //       <h2 className="text-2xl font-bold text-center mb-6">Oil Report</h2>
  //       <div className="overflow-x-auto">
  //         <table className="w-full border-collapse border border-gray-300">
  //           <thead>
  //             <tr className="bg-gray-200 text-gray-700">
  //               <th className="border border-gray-300 px-4 py-2">Oil Type</th>
  //               <th className="border border-gray-300 px-4 py-2">O/B</th>
  //               <th className="border border-gray-300 px-4 py-2">Received</th>
  //               <th className="border border-gray-300 px-4 py-2">Issued</th>
  //               <th className="border border-gray-300 px-4 py-2">Remarks</th>
  //               <th className="border border-gray-300 px-4 py-2">Consumed</th>
  //               <th className="border border-gray-300 px-4 py-2">C/B</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {data.map((oil, index) => (
  //               <tr key={oil.name} className="text-center">
  //                 <td className="border border-gray-300 px-4 py-2 font-medium">{oil.name}</td>
  //                 <td className="border border-gray-300 px-4 py-2">{oil.initial}</td>
  //                 <td className="border border-gray-300 px-4 py-2">
  //                   <input
  //                     type="number"
  //                     min="0"
  //                     className="w-full px-2 py-1 border rounded text-center"
  //                     value={oil.received}
  //                     onChange={(e) => handleChange(index, "received", e.target.value)}
  //                   />
  //                 </td>
  //                 <td className="border border-gray-300 px-4 py-2">
  //                   <input
  //                     type="number"
  //                     min="0"
  //                     className="w-full px-2 py-1 border rounded text-center"
  //                     value={oil.issued}
  //                     onChange={(e) => handleChange(index, "issued", e.target.value)}
  //                   />
  //                 </td>
  //                 <td className="border border-gray-300 px-4 py-2">
  //                   <textarea
  //                     rows="2"
  //                     className="w-full px-2 py-1 border rounded"
  //                     value={oil.Remarks}
  //                     onChange={(e) => handleChange(index, "Remarks", e.target.value)}
  //                   />
  //                 </td>
  //                 <td className="border border-gray-300 px-4 py-2">
  //                   <input
  //                     type="number"
  //                     min="0"
  //                     className="w-full px-2 py-1 border rounded text-center"
  //                     value={oil.consumed}
  //                     onChange={(e) => handleChange(index, "consumed", e.target.value)}
  //                   />
  //                 </td>
  //                 <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
  //                   {oil.balance}
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //       <div className="text-center mt-6">
  //         <button
  //           type="submit"
  //           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200"
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     </form>
  //   );
  // };

  // export default OilReportForm;



//   "use client";

// import { useState } from "react";

// const oilTypes = [
//   { name: "H.S.D", initial: 100 },
//   { name: "15 W 40", initial: 150 },
//   { name: "H.Y.D.68", initial: 200 },
//   { name: "Grease", initial: 50 },
//   { name: "Coolant", initial: 75 },
//   { name: "Compound", initial: 120 },
// ];

// const OilReportForm = () => {
//   const [data, setData] = useState(
//     oilTypes.map((oil) => ({
//       ...oil,
//       received: "",
//       issued: "",
//       Remarks: "",
//       consumed: "",
//       balance: oil.initial,
//     }))
//   );

//   const [date, setDate] = useState("");

//   const handleChange = (index, field, value) => {
//     const updatedData = [...data];

//     // For Remarks, store the text as-is.
//     // For numeric fields, store the raw value (which may be an empty string) so that the input isn't forced to show "0".
//     updatedData[index][field] = value;

//     // Convert numeric inputs for balance calculation.
//     const receivedVal = parseFloat(updatedData[index].received) || 0;
//     const consumedVal = parseFloat(updatedData[index].consumed) || 0;
//     const issuedVal = parseFloat(updatedData[index].issued) || 0;

//     updatedData[index].balance =
//       updatedData[index].initial + receivedVal - consumedVal - issuedVal;

//     setData(updatedData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Date:", date);
//     console.log("Submitted Oil Data:", data);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
//     >
//       <h2 className="text-2xl font-bold text-center mb-6">Oil Report</h2>

//       {/* Date Input Field */}
//       <div className="mb-6 flex flex-col md:flex-row items-center  gap-4">
//         <label htmlFor="date" className="text-lg font-medium">
//           Date:
//         </label>
//         <input
//           type="date"
//           id="date"
//           className="w-full md:w-auto px-3 py-2 border rounded text-gray-700"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//         />
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="border border-gray-300 px-4 py-2">Oil Type</th>
//               <th className="border border-gray-300 px-4 py-2">O/B</th>
//               <th className="border border-gray-300 px-4 py-2">Received</th>
//               <th className="border border-gray-300 px-4 py-2">Issued</th>
//               <th className="border border-gray-300 px-4 py-2">Remarks</th>
//               <th className="border border-gray-300 px-4 py-2">Consumed</th>
//               <th className="border border-gray-300 px-4 py-2">C/B</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((oil, index) => (
//               <tr key={oil.name} className="text-center">
//                 <td className="border border-gray-300 px-4 py-2 font-medium">
//                   {oil.name}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {oil.initial}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <input
//                     type="number"
//                     min="0"
//                     className="w-full px-2 py-1 border rounded text-center"
//                     value={oil.received}
//                     onChange={(e) => handleChange(index, "received", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <input
//                     type="number"
//                     min="0"
//                     className="w-full px-2 py-1 border rounded text-center"
//                     value={oil.issued}
//                     onChange={(e) => handleChange(index, "issued", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <textarea
//                     rows="2"
//                     className="w-full px-2 py-1 border rounded"
//                     value={oil.Remarks}
//                     onChange={(e) => handleChange(index, "Remarks", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <input
//                     type="number"
//                     min="0"
//                     className="w-full px-2 py-1 border rounded text-center"
//                     value={oil.consumed}
//                     onChange={(e) => handleChange(index, "consumed", e.target.value)}
//                   />
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
//                   {oil.balance}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="text-center mt-6">
//         <button
//           type="submit"
//           className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default OilReportForm;


"use client";

import { useState, useEffect } from "react";

const oilTypes = [
  { name: "H.S.D", initial: 100 },
  { name: "15 W 40", initial: 150 },
  { name: "H.Y.D.68", initial: 200 },
  { name: "Grease", initial: 50 },
  { name: "Coolant", initial: 75 },
  { name: "Compound", initial: 120 },
];

const OilReportForm = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("Day");

  useEffect(() => {
    if (date && shift) {
      fetch(`https://reach-backend.vercel.app/operator/getOilReportByDate?date=${date}&shift=${shift}`)
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData);
        })
        .catch((error) => console.error("Error fetching oil data:", error));
    }
  }, [date, shift]);

  const handleChange = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = value;

    // Convert numeric inputs for balance calculation
    const receivedVal = parseFloat(updatedData[index].received) || 0;
    const consumedVal = parseFloat(updatedData[index].consumed) || 0;
    const issuedVal = parseFloat(updatedData[index].issued) || 0;

    updatedData[index].balance =
      updatedData[index].OB + receivedVal - consumedVal - issuedVal;

    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      date,
      shift,
      data,
    };

    fetch("https://reach-backend.vercel.app/operator/addOilReport", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.message);
      })
      .catch((error) => console.error("Error saving oil data:", error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Oil Report</h2>

      {/* Date and Shift Selection */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <div className="flex flex-col">
          <label htmlFor="date" className="text-lg font-medium mb-1">
            Date:
          </label>
          <input
            type="date"
            id="date"
            className="px-3 py-2 border rounded text-gray-700"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="shift" className="text-lg font-medium mb-1">
            Shift:
          </label>
          <select
            id="shift"
            className="px-3 py-2 border rounded text-gray-700"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
          >
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Oil Type</th>
              <th className="border border-gray-300 px-4 py-2">O/B</th>
              <th className="border border-gray-300 px-4 py-2">Received</th>
              <th className="border border-gray-300 px-4 py-2">Issued</th>
              <th className="border border-gray-300 px-4 py-2">Remarks</th>
              <th className="border border-gray-300 px-4 py-2">Consumed</th>
              <th className="border border-gray-300 px-4 py-2">C/B</th>
            </tr>
          </thead>
          <tbody>
            {data.map((oil, index) => (
              <tr key={oil.name} className="text-center">
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  {oil.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">{oil.OB}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    min="0"
                    className="w-full px-2 py-1 border rounded text-center"
                    value={oil.received || ""}
                    onChange={(e) => handleChange(index, "received", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    min="0"
                    className="w-full px-2 py-1 border rounded text-center"
                    value={oil.issued || ""}
                    onChange={(e) => handleChange(index, "issued", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <textarea
                    rows="2"
                    className="w-full px-2 py-1 border rounded"
                    value={oil.remarks || ""}
                    onChange={(e) => handleChange(index, "remarks", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    min="0"
                    className="w-full px-2 py-1 border rounded text-center"
                    value={oil.consumed || ""}
                    onChange={(e) => handleChange(index, "consumed", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  {oil.balance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default OilReportForm;

