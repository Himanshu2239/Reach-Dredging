import React, { useEffect, useState } from "react";
import axios from "axios";

const initialData = [
  { dykeNo: 1, areaAcre: 15.96, totalCapacity: 161495.00, fillUp: 126385.60 },
  { dykeNo: 2, areaAcre: 86.57, totalCapacity: 875832.50, fillUp: 836999.40 },
  { dykeNo: 3, areaAcre: 64.93, totalCapacity: 656952.50, fillUp: 548288.80 },
  { dykeNo: 4, areaAcre: 41.48, totalCapacity: 419622.50, fillUp: 353985.60 },
  { dykeNo: 5, areaAcre: 31.80, totalCapacity: 321722.50, fillUp: 21510.00 },
  { dykeNo: 6, areaAcre: 8.43, totalCapacity: 85287.50, fillUp: 0 },
  { dykeNo: 7, areaAcre: 49.45, totalCapacity: 500265.00, fillUp: 365592.80 },
  { dykeNo: 8, areaAcre: 23.78, totalCapacity: 240542.50, fillUp: 184237.70 },
  { dykeNo: 9, areaAcre: 4.58, totalCapacity: 46307.50, fillUp: 0 },
  { dykeNo: 10, areaAcre: 35.64, totalCapacity: 360562.50, fillUp: 0 },
  { dykeNo: 11, areaAcre: 15.74, totalCapacity: 159280.00, fillUp: 45116.00 },
  { dykeNo: 12, areaAcre: 46.97, totalCapacity: 475172.50, fillUp: 625421.90 },
  { dykeNo: 13, areaAcre: 10.57, totalCapacity: 106970.00, fillUp: 0 },
  { dykeNo: 14, areaAcre: 3.58, totalCapacity: 36255.00, fillUp: 36856.20 },
  { dykeNo: 15, areaAcre: 66.93, totalCapacity: 677180.00, fillUp: 0 },
  { dykeNo: 16, areaAcre: 6.39, totalCapacity: 64617.50, fillUp: 0 }
];

const DykeReportTable = () => {
  const [dykeData, setDykeData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductionData = async () => {
      try {
        const response = await axios.post("https://reach-backend.vercel.app/common/getProductionDataDykewise");
        const productionData = response.data.data;

        const updatedData = dykeData.map((dyke) => {
          const production = productionData.find((prod) => prod._id === `Dyke ${dyke.dykeNo}`);
          const fillUp = production ? dyke.fillUp + production.totalProduction : dyke.fillUp;
          const balance = ((fillUp / dyke.totalCapacity) * 100).toFixed(2) + "%";
          return { ...dyke, fillUp, balance };
        });

        setDykeData(updatedData);
      } catch (err) {
        setError("Failed to load production data");
      } finally {
        setLoading(false);
      }
    };

    fetchProductionData();
  }, []);

  return (
    <div className="p-6 overflow-y-scroll bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Dyke Report Summary</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm text-left rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white text-sm uppercase">
                <th className="border p-3">Dyke No</th>
                <th className="border p-3">Area (Acre)</th>
                <th className="border p-3">Total Capacity (CUM)</th>
                <th className="border p-3">Fill Up</th>
                <th className="border p-3">Balance</th>
              </tr>
            </thead>
            <tbody>
              {dykeData.map((dyke) => (
                <tr key={dyke.dykeNo} className="border hover:bg-gray-100">
                  <td className="border p-3 text-center font-medium text-gray-700">{dyke.dykeNo}</td>
                  <td className="border p-3 text-right text-gray-700">{dyke.areaAcre.toFixed(2)}</td>
                  <td className="border p-3 text-right text-gray-700">{dyke.totalCapacity.toLocaleString('en-IN')}</td>
                  <td className="border p-3 text-right text-gray-700">{dyke.fillUp.toLocaleString('en-IN')}</td>
                  <td className={`border p-3 text-center font-bold ${parseInt(dyke.balance) >= 100 ? 'text-red-600' : 'text-green-600'}`}>{dyke.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DykeReportTable;
