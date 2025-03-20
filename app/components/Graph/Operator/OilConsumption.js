import axios from "axios";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

function OperatorOilComsutionGraph({date, startDate, endDate, dredger}) {

  const [OilConsumptionData, setOilConsumtionData] = useState([]);

  useEffect(() => {
   const fetchData = async() => {
    const response = await axios.post('http://localhost:5001/common/getDateWiseOperatorOilConsumption', {date, startDate, endDate, dredger})
    console.log("Oil Graph Response", response.data);
    setOilConsumtionData(response.data);
   }
   fetchData()
  },[date, startDate, endDate, dredger])

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Oil Consumption Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={OilConsumptionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="consumed" stroke="#ff7300" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OperatorOilComsutionGraph