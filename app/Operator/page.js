// 'use client';

// import { useState } from 'react';

// export default function page() {
//   const [entries, setEntries] = useState([]);
//   const [shift, setShift] = useState('Day Shift');

//   const addEntry = () => {
//     setEntries([...entries, { startTime: '', endTime: '', description: '', workType: 'Dredging', duration: '' }]);
//   };

//   const handleChange = (index, field, value) => {
//     const newEntries = [...entries];
//     newEntries[index][field] = value;

//     if (field === 'endTime' || field === 'startTime') {
//       const start = newEntries[index].startTime;
//       const end = newEntries[index].endTime;
//       if (start && end) {
//         const startDate = new Date(`2022-01-01T${start}`);
//         const endDate = new Date(`2022-01-01T${end}`);
//         const diff = (endDate - startDate) / (1000 * 60); // Convert to minutes
//         newEntries[index].duration = diff > 0 ? `${diff} min` : 'Invalid Time';
//       }
//     }
//     setEntries(newEntries);
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-5" style={{ backgroundImage: "url('/background.jpg')" }}>
//       <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">Work Log</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Shift:</label>
//           <select value={shift} onChange={(e) => setShift(e.target.value)} className="w-full p-2 border rounded">
//             <option>Day Shift</option>
//             <option>Night Shift</option>
//           </select>
//         </div>
//         {entries.map((entry, index) => (
//           <div key={index} className="mb-4 p-4 border rounded-lg bg-gray-100">
//             <div className="grid grid-cols-2 gap-4">
//               <input type="time" value={entry.startTime} onChange={(e) => handleChange(index, 'startTime', e.target.value)} className="p-2 border rounded" />
//               <input type="time" value={entry.endTime} onChange={(e) => handleChange(index, 'endTime', e.target.value)} className="p-2 border rounded" />
//             </div>
//             <textarea placeholder="Description" value={entry.description} onChange={(e) => handleChange(index, 'description', e.target.value)} className="w-full p-2 mt-2 border rounded"></textarea>
//             <select value={entry.workType} onChange={(e) => handleChange(index, 'workType', e.target.value)} className="w-full p-2 mt-2 border rounded">
//               <option>Dredging</option>
//               <option>S.M.C</option>
//               <option>PLW</option>
//               <option>ASOS</option>
//               <option>DM</option>
//               <option>Other</option>
//             </select>
//             <p className="mt-2 font-semibold">Duration: {entry.duration}</p>
//           </div>
//         ))}
//         <button onClick={addEntry} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">+ Add Entry</button>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useState } from 'react';
// import OilReportForm from '../components/OilReportForm';

// export default function WorkLog() {
//   const [entries, setEntries] = useState([]);
//   const [shift, setShift] = useState('Day Shift');
//   const [dredger, setDredger] = useState('K7');
//   const [forward, setForward] = useState('');
//   const [swing, setSwing] = useState('');
//   const [depth, setDepth] = useState('');
//   const [meReading, setMeReading] = useState('');
//   const [aeReading, setAeReading] = useState('');
//   const [dgReading, setDgReading] = useState('');

//   const addEntry = () => {
//     setEntries([...entries, { startTime: '', endTime: '', description: '', workType: 'Dredging', duration: '' }]);
//   };

//   const handleChange = (index, field, value) => {
//     const newEntries = [...entries];
//     newEntries[index][field] = value;

//     if (field === 'endTime' || field === 'startTime') {
//       const start = newEntries[index].startTime;
//       const end = newEntries[index].endTime;
//       if (start && end) {
//         const startDate = new Date(`2022-01-01T${start}`);
//         const endDate = new Date(`2022-01-01T${end}`);
//         let diff = (endDate - startDate) / (1000 * 60); // Convert to minutes
//         if (diff < 0) {
//           diff += 1440; // Adjust for negative difference (crossing midnight)
//         }
//         newEntries[index].duration = `${diff} min`;
//       }
//     }
//     setEntries(newEntries);
//   };


//   return (
//     <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-5" style={{ backgroundImage: "url('/background.jpg')" }}>
//       <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">Dredger Work Log Report</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700">Dredger Type:</label>
//           <select value={dredger} onChange={(e) => setDredger(e.target.value)} className="w-full p-2 border rounded">
//             <option>K7</option>
//             <option>K9</option>
//             <option>K14</option>
//             <option>K15</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Shift:</label>
//           <select value={shift} onChange={(e) => setShift(e.target.value)} className="w-full p-2 border rounded">
//             <option>Day Shift</option>
//             <option>Night Shift</option>
//           </select>
//         </div>
//         {entries.map((entry, index) => (
//           <div key={index} className="mb-4 p-4 border rounded-lg bg-gray-100">
//             <div className="grid grid-cols-2 gap-4">
//               <input type="time" value={entry.startTime} onChange={(e) => handleChange(index, 'startTime', e.target.value)} className="p-2 border rounded" />
//               <input type="time" value={entry.endTime} onChange={(e) => handleChange(index, 'endTime', e.target.value)} className="p-2 border rounded" />
//             </div>
//             <textarea placeholder="Description" value={entry.description} onChange={(e) => handleChange(index, 'description', e.target.value)} className="w-full p-2 mt-2 border rounded"></textarea>
//             <select value={entry.workType} onChange={(e) => handleChange(index, 'workType', e.target.value)} className="w-full p-2 mt-2 border rounded">
//               <option>Dredging</option>
//               <option>SMC/DP</option>
//               <option>PLW</option>
//               <option>ASDS</option>
//               <option>D/M</option>
//               <option>DYKE</option>
//               <option>WP</option>
//               <option>Other</option>
//             </select>
//             <p className="mt-2 font-semibold">Duration: {entry.duration}</p>
//           </div>
//         ))}
//         <button onClick={addEntry} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">+ Add Entry</button>

//         <div className="grid grid-cols-3 gap-4 mt-4">
//           <label>Forward (m)</label>
//           <label>Swing (m)</label>
//           <label>Depth (m)</label>
//           <input type="number" value={forward} onChange={(e) => setForward(e.target.value)} className="p-2 border rounded" />
//           <input type="number" value={swing} onChange={(e) => setSwing(e.target.value)} className="p-2 border rounded" />
//           <input type="number" value={depth} onChange={(e) => setDepth(e.target.value)} className="p-2 border rounded" />
//         </div>
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           <label>M/E Reading</label>
//           <label>A/E Reading</label>
//           <label>D/G Reading</label>
//           <input type="number" value={meReading} onChange={(e) => setMeReading(e.target.value)} className="p-2 border rounded" />
//           <input type="number" value={aeReading} onChange={(e) => setAeReading(e.target.value)} className="p-2 border rounded" />
//           <input type="number" value={dgReading} onChange={(e) => setDgReading(e.target.value)} className="p-2 border rounded" />
//         </div>

//         <button className="w-full mt-4 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">Submit</button>
//       </div>
//       {/* Oil Report Section */}
//       <div className="mt-8">
//         <OilReportForm />
//       </div>
//     </div>
//   );
// }



// 'use client';

// import { useState } from 'react';
// import OilReportForm from '../components/OilReportForm';

// export default function WorkLog() {
//   const [date, setDate] = useState('');
//   const [entries, setEntries] = useState([]);
//   const [shift, setShift] = useState('Day Shift');
//   const [dredger, setDredger] = useState('K7');
//   const [forward, setForward] = useState('');
//   const [swing, setSwing] = useState('');
//   const [depth, setDepth] = useState('');
//   const [meReading, setMeReading] = useState('');
//   const [aeReading, setAeReading] = useState('');
//   const [dgReading, setDgReading] = useState('');

//   const addEntry = () => {
//     setEntries([...entries, { startTime: '', endTime: '', description: '', workType: 'Dredging', duration: '' }]);
//   };

//   const removeEntry = (index) => {
//     setEntries(entries.filter((_, i) => i !== index));
//   };

//   const handleChange = (index, field, value) => {
//     const newEntries = [...entries];
//     newEntries[index][field] = value;

//     if (field === 'endTime' || field === 'startTime') {
//       const start = newEntries[index].startTime;
//       const end = newEntries[index].endTime;
//       if (start && end) {
//         const startDate = new Date(`2022-01-01T${start}`);
//         const endDate = new Date(`2022-01-01T${end}`);
//         let diff = (endDate - startDate) / (1000 * 60); // Convert to minutes
//         if (diff < 0) {
//           diff += 1440; // Adjust for negative difference (crossing midnight)
//         }
//         newEntries[index].duration = `${diff} min`;
//       }
//     }
//     setEntries(newEntries);
//   };


//   const handleSubmit = async () => {
//     if (!date) {
//       alert('Please select a date.');
//       return;
//     }
//     if (!forward || !swing || !depth || !meReading || !aeReading || !dgReading) {
//       alert('Please fill in all required fields.');
//       return;
//     }
//     if (entries.some((entry) => !entry.startTime || !entry.endTime)) {
//       alert('Please provide both start and end times for all entries.');
//       return;
//     }

//     try {
//       const response = await fetch('https://reach-backend.vercel.app/operator/addWorkLog', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           date,
//           shift,
//           dredger,
//           forward,
//           swing,
//           depth,
//           meReading,
//           aeReading,
//           dgReading,
//           entries,
//         }),
//       });

//       const data = await response.json();
//       console.log("data", data)
//       if (response.ok) {
//         alert(data.message);
//       } else {
//         alert(data.error || 'Something went wrong.');
//       }
//     } catch (error) {
//       console.error('Error submitting operator work log:', error);
//       alert('Failed to submit operator work log. Please try again.');
//     }
//   };

//   // const handleSubmit = () => {
//   //   if (!date) {
//   //     alert('Please select a date.');
//   //     return;
//   //   }
//   //   if (!forward || !swing || !depth || !meReading || !aeReading || !dgReading) {
//   //     alert('Please fill in all required fields.');
//   //     return;
//   //   }
//   //   if (entries.some((entry) => !entry.startTime || !entry.endTime)) {
//   //     alert('Please provide both start and end times for all entries.');
//   //     return;
//   //   }
//   //   alert('Work log submitted successfully!');
//   // };

//   return (
//     <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-5" style={{ backgroundImage: "url('/background.jpg')" }}>
//       <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">Dredger Work Log Report</h2>

//         {/* Date Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Date:</label>
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded" />
//         </div>

//         {/* Dredger Type and Shift */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Dredger Type:</label>
//           <select value={dredger} onChange={(e) => setDredger(e.target.value)} className="w-full p-2 border rounded">
//             <option>K7</option>
//             <option>K9</option>
//             <option>K14</option>
//             <option>K15</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Shift:</label>
//           <select value={shift} onChange={(e) => setShift(e.target.value)} className="w-full p-2 border rounded">
//             <option>Day Shift</option>
//             <option>Night Shift</option>
//           </select>
//         </div>

//         {/* Work Entries */}
//         {entries.map((entry, index) => (
//           <div key={index} className="mb-4 p-4 pl-6 pr-6 border rounded-lg bg-gray-100 relative">
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="time"
//                 value={entry.startTime}
//                 onChange={(e) => handleChange(index, 'startTime', e.target.value)}
//                 className="p-2 border rounded"
//               />
//               <input
//                 type="time"
//                 value={entry.endTime}
//                 onChange={(e) => handleChange(index, 'endTime', e.target.value)}
//                 className="p-2 border rounded"
//               />
//             </div>
//             <textarea
//               placeholder="Description"
//               value={entry.description}
//               onChange={(e) => handleChange(index, 'description', e.target.value)}
//               className="w-full p-2 mt-2 border rounded"
//             ></textarea>
//             <select
//               value={entry.workType}
//               onChange={(e) => handleChange(index, 'workType', e.target.value)}
//               className="w-full p-2 mt-2 border rounded"
//             >
//               <option>Dredging</option>
//               <option>SMC/DP</option>
//               <option>PLW</option>
//               <option>ASDS</option>
//               <option>D/M</option>
//               <option>DYKE</option>
//               <option>WP</option>
//               <option>Other</option>
//             </select>
//             <p className="mt-2 font-semibold">Duration: {entry.duration}</p>
//             <button
//               onClick={() => removeEntry(index)}
//               className="absolute top-0 right-0  text-white rounded-lg  font-bold "
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"  
//                 className="w-6 h-6 text-gray-800 hover:text-red-600 cursor-pointer"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <line x1="15" y1="9" x2="9" y2="15" />
//                 <line x1="9" y1="9" x2="15" y2="15" />
//               </svg>
//             </button>
//           </div>
//         ))}
//         <button onClick={addEntry} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
//           + Add Entry
//         </button>

//         {/* Required Inputs */}
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           <label>Forward (m)</label>
//           <label>Swing (m)</label>
//           <label>Depth (m)</label>
//           <input
//             type="number"
//             value={forward}
//             onChange={(e) => setForward(e.target.value)}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             value={swing}
//             onChange={(e) => setSwing(e.target.value)}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             value={depth}
//             onChange={(e) => setDepth(e.target.value)}
//             className="p-2 border rounded"
//           />
//         </div>
//         <div className="grid grid-cols-3 gap-4 mt-4">
//           <label>M/E Reading</label>
//           <label>A/E Reading</label>
//           <label>D/G Reading</label>
//           <input
//             type="number"
//             value={meReading}
//             onChange={(e) => setMeReading(e.target.value)}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             value={aeReading}
//             onChange={(e) => setAeReading(e.target.value)}
//             className="p-2 border rounded"
//           />
//           <input
//             type="number"
//             value={dgReading}
//             onChange={(e) => setDgReading(e.target.value)}
//             className="p-2 border rounded"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmit}
//           className="w-full mt-4 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
//         >
//           Submit
//         </button>
//       </div>
//       {/* Oil Report Section */}
//       <div className="mt-8">
//         <OilReportForm />
//       </div>
//     </div>
//   );
// }



'use client';

import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';  // Import toast
import 'react-toastify/dist/ReactToastify.css';  // Import toast styles
import Image from "next/image";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../components/ProtectedRoute";
// import Header from "../components/Header/Header";
// import { Header } from '../components/Header/header.js'

const oilTypes = [
  { name: "H.S.D", initial: 0 },
  { name: "15 W 40", initial: 0 },
  { name: "H.Y.D.68", initial: 0 },
  { name: "Grease", initial: 0 },
  { name: "Coolant", initial: 0 },
  { name: "Compound", initial: 0 },
];

export default function page() {
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("Select shift");
  const [dredger, setDredger] = useState("Select dredger type");
  const [forward, setForward] = useState("");
  const [swing, setSwing] = useState("");
  const [depth, setDepth] = useState("");
  const [meReading, setMeReading] = useState("");
  const [aeReading, setAeReading] = useState("");
  const [dgReading, setDgReading] = useState("");
  const [entries, setEntries] = useState([]);
  const [oilData, setOilData] = useState(oilTypes.map(oil => ({ ...oil, OB: oil.initial, received: "", issued: "", consumed: "", balance: oil.initial, remarks: "" })));
  const router = useRouter();

  const addEntry = () => {
    setEntries([...entries, { startTime: "", endTime: "", description: "", workType: "Dredging", duration: "" }]);
  };

  const removeEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };





  // console.log("token", token);


  // const fetchdata = async() => {
  //   console.log("data", date, shift, dredger)
  //   try{
  //     const res = await axios.post("https://reach-backend.vercel.app/operator/getOpeningBalace")
  //     console.log("res", res);
  //   }
  //   catch(error){
  //     console.log("error", error)
  //   }
  // }

  const fetchOpeningBalance = async () => {
    console.log("data", date, shift, dredger)
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error('Authorization failed');
      router.push('/login');
      return;
    }
    try {
      // https://reach-backend.vercel.app/operator/getOpeningBalace
      const response = await fetch("https://reach-backend.vercel.app/operator/getOpeningBalace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ date, shift, dredger }),
      });

      // console.log("responseOpenBalance", response)


      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to fetch opening balance.");
      }

      const data = await response.json();
      // console.log("data", data);
      // console.log("OilOB", data.data.oilOB);
      if (data && data.data.oilOB) {
        setOilData((prevOilData) =>
          prevOilData.map((oil) => {
            const matchingOil = data.data.oilOB.find((o) => o.name === oil.name);
            return {
              ...oil,
              OB: matchingOil ? matchingOil.OB : oil.OB,
              balance: matchingOil ? matchingOil.OB : oil.OB,
            };
          })
        );
        // toast.success("Opening balance updated!");
      }
      // if (data && Array.isArray(data)) {
      //   setOilData((prevOilData) =>
      //     prevOilData.map((oil) => {
      //       const matchingOil = data.find((o) => o.name === oil.name); // Match oil by name
      //       return {
      //         ...oil,
      //         OB: matchingOil ? matchingOil.OB : oil.OB, // Update OB (Opening Balance)
      //         balance: matchingOil ? matchingOil.OB : oil.OB, // Update balance
      //       };
      //     })
      //   );
      //   toast.success("Opening balance updated!");
      // } 
      else {
        toast.error("Unexpected data format received from the server.");
      }
    } catch (error) {
      console.error("Error fetching opening balance:", error);
      toast.error("Failed to fetch opening balance. Please try again.");
    }
  };




  useEffect(() => {
    if (date && shift !== 'Select shift' && dredger !== 'Select dredger type') {
      // console.log("fethchdata")
      // fetchdata();
      fetchOpeningBalance();
    }
  }, [date, shift, dredger]);

  const handleEntryChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = value;

    if (field === "startTime" || field === "endTime") {
      const start = updatedEntries[index].startTime;
      const end = updatedEntries[index].endTime;
      if (start && end) {
        const startDate = new Date(`2022-01-01T${start}`);
        const endDate = new Date(`2022-01-01T${end}`);
        let diff = (endDate - startDate) / (1000 * 60); // Convert to minutes
        if (diff < 0) {
          diff += 1440; // Adjust for negative difference (crossing midnight)
        }
        updatedEntries[index].duration = `${diff}`;
      }
    }
    setEntries(updatedEntries);
  };

  const handleOilChange = (index, field, value) => {
    const updatedOilData = [...oilData];
    updatedOilData[index][field] = value;

    const received = parseFloat(updatedOilData[index].received) || 0;
    const issued = parseFloat(updatedOilData[index].issued) || 0;
    const consumed = parseFloat(updatedOilData[index].consumed) || 0;

    updatedOilData[index].balance = updatedOilData[index].OB + received - issued - consumed;
    setOilData(updatedOilData);
  };


  const handleSubmit = async () => {
    if (!date || !shift || !dredger) {
      toast.error("Date, shift, and dredger type are required.");
      return;
    }
    if (!forward || !swing || !depth || !meReading || !aeReading || !dgReading) {
      toast.error("Please fill in all required work log fields.");
      return;
    }
    if (entries.some(entry => !entry.startTime || !entry.endTime)) {
      toast.error("Please provide both start and end times for all work entries.");
      return;
    }
    const token = localStorage.getItem('accessToken')
    if (!token) {
      router.push('/login')
    }

    const requestBody = {
      date,
      shift,
      dredger,
      workLog: {
        forward,
        swing,
        depth,
        meReading,
        aeReading,
        dgReading,
        entries,
      },
      oilReport: oilData,
    };

    try {
      const response = await fetch("https://reach-backend.vercel.app/operator/addOperatorReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        // Reset all form fields after successful submission
        setDate("");
        setShift("Select shift");
        setDredger("Select dredger type");
        setForward("");
        setSwing("");
        setDepth("");
        setMeReading("");
        setAeReading("");
        setDgReading("");
        setEntries([]);
        setOilData(oilTypes.map(oil => ({ ...oil, OB: oil.initial, received: "", issued: "", consumed: "", balance: oil.initial, remarks: "" })));
       } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Failed to submit. Please try again.");
    }
  };

  const images = [
    "/image_1.jpeg",
    "/image_2.jpeg",
    "/image_3.jpeg",
    // "/image-4.jpeg",
  ];

  return (
    // <ProtectedRoute>
    <div>
      <Header />
      <div className="min-h-screen bg-cover pt-[6rem] bg-center p-5" style={{ backgroundImage: `url(${images[0]})` }}>

        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Dredger Work Log and Oil Report</h2>

          {/* Date, Shift, and Dredger Type */}
          <div className="md:grid md:grid-cols-3 md:space-y-0 space-y-2 gap-4 mb-6">
            <div className="flex">
              <label className="text-lg font-medium mb-1 mr-2">Date:</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-1 border rounded" required />
            </div>
            <div className="flex">
              <label className="text-lg font-medium mb-1 mr-2">Shift:</label>
              <select value={shift} onChange={(e) => setShift(e.target.value)} className="w-full p-2 border rounded">
                <option value="">Select shift</option>
                <option>Day</option>
                <option>Night</option>
              </select>
            </div>
            <div className="flex">
              <label className="text-lg font-medium mb-1 mr-2">Dredger: </label>
              <select value={dredger} onChange={(e) => setDredger(e.target.value)} className="w-full p-2 border rounded">
                <option value="">Select dredger type</option>
                <option>K7</option>
                <option>K9</option>
                <option>K14</option>
                <option>K15</option>
              </select>
            </div>
          </div>

          {/* Work Log Section */}
          <h3 className="text-xl font-semibold mb-4">Work Log</h3>
          {entries.map((entry, index) => (
            <div key={index} className="mb-4 border p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="time"
                  value={entry.startTime}
                  onChange={(e) => handleEntryChange(index, "startTime", e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="time"
                  value={entry.endTime}
                  onChange={(e) => handleEntryChange(index, "endTime", e.target.value)}
                  className="p-2 border rounded"
                />
              </div>
              <textarea
                placeholder="Description"
                value={entry.description}
                onChange={(e) => handleEntryChange(index, "description", e.target.value)}
                className="w-full p-2 mt-2 border rounded"
              ></textarea>
              <select
                value={entry.workType}
                onChange={(e) => handleEntryChange(index, "workType", e.target.value)}
                className="w-full p-2 mt-2 border rounded"
              >
                <option>Dredging</option>
                <option>SMC/DP</option>
                <option>PLW</option>
                <option>ASDS</option>
                <option>D/M</option>
                <option>DYKE</option>
                <option>WP</option>
                <option>Other</option>
              </select>
              <p className="mt-2 font-semibold">Duration: {entry.duration} min</p>
              <button onClick={() => removeEntry(index)} className="text-red-500">Remove</button>
            </div>
          ))}
          <button onClick={addEntry} className="w-full bg-blue-500 text-white p-2 rounded mb-4">+ Add Work Entry</button>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <label>Forward (m)</label>
            <label>Swing (m)</label>
            <label>Depth (m)</label>
            <input type="number" value={forward} onChange={(e) => setForward(e.target.value)} className="p-2 border rounded" />
            <input type="number" value={swing} onChange={(e) => setSwing(e.target.value)} className="p-2 border rounded" />
            <input type="number" value={depth} onChange={(e) => setDepth(e.target.value)} className="p-2 border rounded" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <label>M/E Reading</label>
            <label>A/E Reading</label>
            <label>D/G Reading</label>
            <input type="number" value={meReading} onChange={(e) => setMeReading(e.target.value)} className="p-2 border rounded" />
            <input type="number" value={aeReading} onChange={(e) => setAeReading(e.target.value)} className="p-2 border rounded" />
            <input type="number" value={dgReading} onChange={(e) => setDgReading(e.target.value)} className="p-2 border rounded" />
          </div>

          {/* Oil Report Section */}
          {/* <h3 className="text-xl font-semibold mt-4 mb-4">Oil Report</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Oil Type</th>
              <th className="border px-4 py-2">O/B</th>
              <th className="border px-4 py-2">Received</th>
              <th className="border px-4 py-2">Issued</th>
              <th className="border px-4 py-2">Consumed</th>
              <th className="border px-4 py-2">Remarks</th>
              <th className="border px-4 py-2">C/B</th>
            </tr>
          </thead>
          <tbody>
            {oilData.map((oil, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{oil.name}</td>
                <td className="border px-4 py-2">{oil.OB}</td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={oil.received}
                    onChange={(e) => handleOilChange(index, "received", e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={oil.issued}
                    onChange={(e) => handleOilChange(index, "issued", e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    value={oil.consumed}
                    onChange={(e) => handleOilChange(index, "consumed", e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <textarea
                    value={oil.remarks}
                    onChange={(e) => handleOilChange(index, "remarks", e.target.value)}
                    className="w-full border rounded p-1"
                  ></textarea>
                </td>
                <td className="border px-4 py-2">{oil.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

          <div className="p-2">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">Oil Report</h3>
            <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-blue-500 text-white text-left">
                    <th className="px-4 py-3">Oil Type</th>
                    <th className="px-4 py-3">O/B</th>
                    <th className="px-4 py-3">Received</th>
                    <th className="px-4 py-3">Issued</th>
                    <th className="px-4 py-3">Consumed</th>
                    <th className="px-4 py-3">Remarks</th>
                    <th className="px-4 py-3">C/B</th>
                  </tr>
                </thead>
                <tbody>
                  {oilData.map((oil, index) => (
                    <tr key={index} className="border-t hover:bg-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-700">{oil.name}</td>
                      <td className="px-4 py-3 text-center">{oil.OB}</td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={oil.received}
                          onChange={(e) => handleOilChange(index, 'received', e.target.value)}
                          className="w-full min-w-20  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-2 border rounded-md focus:ring focus:ring-blue-200"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={oil.issued}
                          onChange={(e) => handleOilChange(index, 'issued', e.target.value)}
                          className="w-full min-w-20  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-2 border rounded-md focus:ring focus:ring-blue-200"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={oil.consumed}
                          onChange={(e) => handleOilChange(index, 'consumed', e.target.value)}
                          className="w-full min-w-20  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-2 border rounded-md focus:ring focus:ring-blue-200"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <textarea
                          value={oil.remarks}
                          onChange={(e) => handleOilChange(index, 'remarks', e.target.value)}
                          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                        />
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-gray-700">{oil.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ToastContainer position="top-right" autoClose={1000} hideProgressBar />

          <button onClick={handleSubmit} className="w-full bg-green-500 text-white p-2 rounded mt-4">Submit Report</button>
        </div>
      </div>
    </div>
    // </ProtectedRoute>
  );
}
