import axios from "axios";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const OperatorProductionGraph = ({ date, startDate, endDate, dredger }) => {
    const [productionData, setProductionData] = useState([]);
    const targetValue = 1000;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("https://reach-backend.vercel.app/common/getDateWiseOperatorProductionData", { date, startDate, endDate, dredger },
                );
        
                const data = response.data;
                // const formattedData = data.map((item) => ({
                //   date: item.date,
                //   production: item.production,
                // }));

                setProductionData(data);
            } catch (error) {
                console.error("Error fetching operator production data:", error);
            }
        };


        if(date || (startDate && endDate) || dredger)
         fetchData();
    }, [date, startDate, endDate, dredger]);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Operator Production Analytics</h2>
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

export default OperatorProductionGraph;
