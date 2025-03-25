import React, { useEffect, useState } from "react";
import axios from "axios";

const BlockWiseReport = () => {
  const [blockData, setBlockData] = useState([
    { block: "Block A", totalArea: 722918.34, qty: 2120560.464, executedQty: 1624386.2},
    { block: "Block B", totalArea: 337057.68, qty: 988702.528, executedQty: 410564.4},
    { block: "Block C", totalArea: 1432434.321, qty: 4201807.342, executedQty: 1708288.6},
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch block-wise production data from API
  useEffect(() => {
    const fetchProductionData = async () => {
      try {
        const response = await axios.post("https://reach-backend.vercel.app/common/getProductionDataBlockWise"); // Replace with actual API URL
        const productionData = response.data.data;
        // console.log("ProductionData", productionData)
        // Update executedQty based on API response
        const updatedData = blockData.map((item) => {
          const matchingBlock = productionData.find(
            (block) => block._id.toLowerCase() === item.block.toLowerCase()
          );
          return {
            ...item,
            executedQty: item.executedQty + (matchingBlock ? matchingBlock.totalProduction : 0),
          };
        });

        setBlockData(updatedData);
      } catch (error) {
        console.error("Error fetching block-wise production:", error);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductionData();
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 w-full">
      <div className="w-full mx-auto bg-white p-4 overflow-auto rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Block Wise Production Report
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 p-2">Block Name</th>
              <th className="border border-gray-300 p-2">Total Area</th>
              <th className="border border-gray-300 p-2">QTY (CUM)</th>
              <th className="border border-gray-300 p-2">Executed QTY</th>
              <th className="border border-gray-300 p-2">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {blockData.map((item, index) => (
              <tr key={index} className="text-center hover:bg-gray-100">
                <td className="border border-gray-300 p-2 font-semibold">{item.block}</td>
                <td className="border border-gray-300 p-2">{item.totalArea.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="border border-gray-300 p-2">{item.qty.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="border border-gray-300 p-2 font-bold text-blue-600">
                  {item.executedQty.toLocaleString('en-IN',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </td>
                <td className="border border-gray-300 p-2 font-bold text-green-600">
                  {((item.executedQty / item.qty) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-300 font-semibold text-center">
              <td className="border border-gray-300 p-2">Total</td>
              <td className="border border-gray-300 p-2">
                {blockData.reduce((sum, item) => sum + item.totalArea, 0).toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2">
                {blockData.reduce((sum, item) => sum + item.qty, 0).toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2 font-bold text-blue-600">
                {blockData.reduce((sum, item) => sum + item.executedQty, 0).toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2 font-bold text-green-600">
                {(
                  (blockData.reduce((sum, item) => sum + item.executedQty, 0) /
                    blockData.reduce((sum, item) => sum + item.qty, 0)) *
                  100
                ).toFixed(2)}%
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default BlockWiseReport;

