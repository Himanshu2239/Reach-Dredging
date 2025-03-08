
// // import { Card, CardContent } from '../components/ui/card.jsx';

// import { useState, useEffect } from "react";





// export default function TotalProductionReport() {
//     const productionData = [
//         { id: 1, dredger: 'K-7 CSD 250 DREDGER', qty: 390435.90 },
//         { id: 2, dredger: 'K-9 CSD 250 DREDGER', qty: 250988.20 },
//         { id: 3, dredger: 'K-14 CSD 500 DREDGER', qty: 1263443.20 },
//         { id: 4, dredger: 'K-15 CSD 500 DREDGER', qty: 1284636.70 },
//       ];

//       const totalQty = productionData.reduce((sum, item) => sum + item.qty, 0);
//     const [totalProduction, setTotalProduction] = useState({});
//     useEffect(() => {
//         fetch(`http://localhost:5000/common/getDredgerTotalProduction`)
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.success) {
//               setTotalProduction(data.totalProduction);
//             }
//           })
//           .catch((err) => console.error("Error fetching data:", err));
//       }, []);
//   return (
//     <div className="p-4 shadow-lg border rounded-lg bg-white">
//       {/* <CardContent> */}
//         <h2 className="text-lg font-bold text-center border-b pb-2">TOTAL PRODUCTION REPORT</h2>
//         <table className="w-full border-collapse border mt-2 text-sm">
//           <thead>
//             <tr className="bg-gray-200 border">
//               <th className="border px-4 py-2">#</th>
//               <th className="border px-4 py-2 text-left">Dredger</th>
//               <th className="border px-4 py-2 text-right">Qty</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productionData.map((item) => (
//               <tr key={item.id} className="border">
//                 <td className="border px-4 py-2 text-center">{item.id}</td>
//                 <td className="border px-4 py-2">{item.dredger}</td>
//                 <td className="border px-4 py-2 text-right">{item.qty.toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr className="bg-gray-300 font-bold">
//               <td colSpan="2" className="border px-4 py-2 text-right">Till Date Total Qty</td>
//               <td className="border px-4 py-2 text-right text-lg">{totalQty.toLocaleString()}</td>
//             </tr>
//           </tfoot>
//         </table>
//       {/* </CardContent> */}
//     </div>
//   );
// }


import axios from "axios";
import { useState, useEffect } from "react";

export default function TotalProductionReport() {
    const [totalProductionArr, setTotalProductionArr] = useState([
        { id: 1, dredger: 'K7', qty: 390435.90 },
        { id: 2, dredger: 'K9', qty: 250988.20 },
        { id: 3, dredger: 'K14', qty: 1263443.20 },
        { id: 4, dredger: 'K15', qty: 1284636.70 },
    ]
);
    const [totalQty, setTotalQty] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sqrQty, setSqrQty] = useState();
    const [balanceQty, setBalanceQty] = useState();
    const [balancePercentage, setBalancePercentage] = useState();
    const indialProductionData = [
        { id: 1, dredger: 'K7', qty: 390435.90 },
        { id: 2, dredger: 'K9', qty: 250988.20 },
        { id: 3, dredger: 'K14', qty: 1263443.20 },
        { id: 4, dredger: 'K15', qty: 1284636.70 },
    ];

    // const fetchData = async () => {
    //     await axios.post('http://localhost:5000/common/getDredgerTotalProduction')// .then(res => console.log(res.json()))
    //         .then((data) => {
    //             if (data.data.success) {
    //                 console.log(data.data)

    //                 // const total = data.totalProduction.reduce((sum, item) => sum + item.qty, 0);
    //                 let ProductionData = Object.entries(data.data.totalProduction).map(([key, qty]) => ({ dredger: key, qty }));
    //                 // console.log(arrayOfObjects);
    //                 console.log("ProductionData", ProductionData)
                   
    //                 // if(ProductionData)
    //                 for (let i = 0; i < 4; i++) {
    //                     if (!ProductionData[i] || !ProductionData[i].dredger) continue;
    //                     if (ProductionData[i].dredger === "K7")
    //                         ProductionData[i].qty += indialProductionData[0].qty;
    //                     else if (ProductionData[i].dredger === "K9")
    //                         ProductionData[i].qty += indialProductionData[1].qty;
    //                     else if (ProductionData[i].dredger === "K14")
    //                         ProductionData[i].qty += indialProductionData[2].qty;
    //                     else
    //                         ProductionData[i].qty += indialProductionData[3].qty;
    //                 }


    //                 // console.log("After", ProductionData);

    //                 const TotalProduction = ProductionData.reduce((sum, item) => sum + item.qty, 0)

    //                 setTotalProductionArr(ProductionData);

    //                 // const totalProductionObject = data.data.totalProduction;
    //                 // console.log(TotalProduction);
    //                 setTotalQty(TotalProduction);
    //                 const sqrQt = 7377860.00
    //                 setSqrQty(sqrQt)
    //                 setBalanceQty(sqrQt - TotalProduction);
    //                 const balancePercent = ((sqrQt - TotalProduction)/sqrQt) * 100;
    //                 setBalancePercentage(balancePercent);
    //             } else {
    //                 throw new Error("Invalid data format");
    //             }
    //         })
    //         .catch((err) => {
    //             console.error("Error fetching data:", err);
    //             setError("Failed to load data");
    //         })
    //         .finally(() => setLoading(false));
    // }
    const fetchData = async () => {
        await axios.post('http://localhost:5000/common/getDredgerTotalProduction')
            .then((data) => {
                if (data.data.success) {
                    // console.log("Fetched Data:", data.data);
    
                    // Convert API response to array format
                    let ProductionData = Object.entries(data.data.totalProduction || {})
                        .map(([key, qty]) => ({ dredger: key, qty }));
    
                    // console.log("Mapped Production Data:", ProductionData);
    
                    // Ensure all dredgers exist in ProductionData
                    const updatedProductionData = indialProductionData.map((defaultDredger) => {
                        const existingDredger = ProductionData.find(d => d.dredger === defaultDredger.dredger);
                        return existingDredger
                            ? { ...existingDredger, qty: existingDredger.qty + defaultDredger.qty }
                            : { ...defaultDredger }; // Use default qty if not found
                    });
    
                    console.log("Final Production Data:", updatedProductionData);
    
                    // Calculate total production
                    const TotalProduction = updatedProductionData.reduce((sum, item) => sum + item.qty, 0);
    
                    setTotalProductionArr(updatedProductionData);
                    setTotalQty(TotalProduction);
    
                    // Fixed values
                    const sqrQt = 7377860.00;
                    setSqrQty(sqrQt);
                    setBalanceQty(sqrQt - TotalProduction);
                    setBalancePercentage(((sqrQt - TotalProduction) / sqrQt) * 100);
                } else {
                    throw new Error("Invalid data format");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError("Failed to load data");
            })
            .finally(() => setLoading(false));
    };
    

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="p-4 mb-4  shadow-lg border rounded-lg bg-white">
            <h2 className="text-lg font-bold mt-4 text-center border-b pb-2">TOTAL PRODUCTION REPORT</h2>

            {loading ? (
                <p className="text-center py-4 text-blue-600 font-semibold">Loading...</p>
            ) : error ? (
                <p className="text-center py-4 text-red-600 font-semibold">{error}</p>
            ) : (
                <table className="w-full mt-10 border-collapse border text-sm">
                    <thead>
                        <tr className="bg-blue-500 text-white text-sm uppercase">
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2 text-left">Dredger</th>
                            <th className="border px-4 py-2 text-right">Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {totalProductionArr.map((item, index) => (
                            <tr key={index} className="border">
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2">{item.dredger}</td>
                                <td className="border px-4 py-2 text-right">{item.qty.toLocaleString('en-IN')}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-gray-300 font-bold">
                            <td colSpan="2" className="border px-4 py-2 text-center">Balance Percentage</td>
                            <td className="border px-4 py-2 text-right text-lg">{balancePercentage.toFixed(2)} % </td>
                        </tr>
                    </tfoot>
                    <tfoot>
                        <tr className="bg-gray-100 font-bold">
                            <td colSpan="2" className="border px-4 py-2 text-center">Till Date Total Qty</td>
                            <td className="border px-4 py-2 text-right text-lg">{totalQty.toLocaleString('en-IN')}</td>
                        </tr>
                    </tfoot>
                    <tfoot>
                        <tr className="bg-gray-300 font-bold">
                            <td colSpan="2" className="border px-4 py-2 text-center">SOR QTY</td>
                            <td className="border px-4 py-2 text-right text-lg">{sqrQty.toLocaleString('en-IN')}.00</td>
                        </tr>
                    </tfoot>
                  
                    <tfoot>
                        <tr className="bg-gray-300 font-bold">
                            <td colSpan="2" className="border px-4 py-2 text-center">Balance QTY</td>
                            <td className="border px-4 py-2 text-right text-lg">{balanceQty.toLocaleString('en-IN')}</td>
                        </tr>
                    </tfoot>
                   
                </table>
            )}
        </div>
    );
}
