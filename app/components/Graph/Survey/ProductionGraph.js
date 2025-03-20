import axios from "axios";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const SurveyProductionGraph = ({date, startDate, endDate, dredger}) => {
  const [productionData, setProductionData] = useState([]);
  const targetValue = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/common/getDateWiseSurveyProductionData', {date, startDate, endDate, dredger})
        console.log("respose", response)
        
        // const data = await response.json();
        const data = response.data;
        // Transform data to match chart format
        const formattedData = data.map(item => ({
          date: item.date, // Keep the formatted date from API
          production: item.production, // Production value
        }));

        setProductionData(formattedData); 
      } catch (error) {
        console.error("Error fetching production data:", error);
      }
    };
 
    fetchData();
  }, [date, startDate, endDate, dredger]);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Production Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={productionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="production" stroke="#8884d8" strokeWidth={2} />
          <ReferenceLine y={targetValue} label="Target" stroke="red" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SurveyProductionGraph;
