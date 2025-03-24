"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import DateRangeViewSection from "@/app/components/admin/DateRangeViewSection";
import ProductionSection from "@/app/components/admin/ProductionSection";
import OilReportSection from "@/app/components/admin/OilReportSection";
import TotalProductionReport from "../components/TotalProduction";
import BlockWiseReport from "../components/BlockWiseReport";
import DykeReportTable from "../components/DykeReportTable";
import SurveyProductionGraph from "../components/Graph/Survey/ProductionGraph";
import OperatorProductionGraph from "../components/Graph/Operator/ProductionGraph";
import OperatorOilComsutionGraph from "../components/Graph/Operator/OilConsumption";
 
const dredgers = ["K7", "K9", "K14", "K15", "All"];

// Helper function to format a Date object to "yyyy-mm-dd"
const formatDate = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const day = ("0" + dateObj.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

export default function Page() {
  // States for individual date production
  const [date, setDate] = useState("");
  const [selectedDredger, setSelectedDredger] = useState("All");
  const [selectedView, setSelectedView] = useState("Survey");

  // States for range production (monthly or date-range)
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [showMonth, setShowMonth] = useState(false);

  // Daily production data state
  const [data, setData] = useState({
    surveyProduction: 1000,
    surveyProductionPerHour: 50,
    productionHours: 20,
    operatorProduction: 800,
    operatorProductionPerHour: 40,
  });

  // Monthly or date-range production data state
  const [monthlyData, setMonthlyData] = useState({
    surveyProduction: 30000,
    surveyProductionPerHour: 55,
    productionHours: 22,
    operatorProduction: 25000,
    operatorProductionPerHour: 45,
  });

  // Oil consumption state – holds both daily and monthly data.
  const [oilConsumption, setOilConsumption] = useState({
    dateCumulative: 0, // Daily oil consumption
    rangeCumulative: 0, // Monthly (or date-range) oil consumption
    dateUsed: "",
    message: "",
  });

  // Set default startDate (first day of current month) and endDate (today)
  useEffect(() => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    setStartDate(formatDate(firstDay));
    setEndDate(formatDate(today));
  }, []);

  // Toggle view text based on date range selections.
  useEffect(() => {
    if (startDate && endDate) setShowMonth(false);
    else setShowMonth(true);
  }, [startDate, endDate]);

  // Fetch daily production details.
  useEffect(() => {
    const fetchProductionData = async () => {
      try {
        const payload = {
          dredger: selectedDredger,
          date: date, // if empty, backend returns the latest date
          view: selectedView,
        };

        const response = await axios.post(
          "https://reach-backend.vercel.app/admin/fetchProductionDetailsForGivenDate",
          payload
        );
        const resData = response.data;

        // Update the date if not set (on mount)
        if (!date && resData.date) {
          setDate(resData.date);
        }

        // Choose details based on selected dredger, fallback to "all"
        const key = selectedDredger.toLowerCase();
        const productionDetails = resData.details[key] || resData.details.all;

        // Update daily production data (rounding each value to 1 decimal place)
        if (selectedView === "Survey") {
          setData((prev) => ({
            ...prev,
            surveyProduction: Number(productionDetails.production).toFixed(1),
            surveyProductionPerHour: Number(
              productionDetails.totalHours
            ).toFixed(1),
            productionHours: Number(productionDetails.efficiency).toFixed(1),
          }));
        } else if (selectedView === "Operator") {
          setData((prev) => ({
            ...prev,
            operatorProduction: Number(productionDetails.production).toFixed(1),
            operatorProductionPerHour: Number(
              productionDetails.totalHours
            ).toFixed(1),
            productionHours: Number(productionDetails.efficiency).toFixed(1),
          }));
        }
      } catch (error) {
        console.error("Error fetching production details:", error);
      }
    };
  //test
    fetchProductionData();
  }, [selectedDredger, selectedView, date]);

  // Fetch monthly (or date-range) production details.
  useEffect(() => {
    const fetchMonthlyProductionData = async () => {
      try {
        const payload = {
          dredger: selectedDredger,
          startDate: startDate,
          endDate: endDate,
          view: selectedView,
        };

        const response = await axios.post(
          "https://reach-backend.vercel.app/admin/fetchProductionDetailsForGivenRange",
          payload
        );
        const resData = response.data;
        const key = selectedDredger.toLowerCase();
        const productionDetails = resData.details[key] || resData.details.all;

        // Update monthly production data (rounding each value to 1 decimal place)
        if (selectedView === "Survey") {
          setMonthlyData({
            surveyProduction: Number(productionDetails.production).toFixed(1),
            surveyProductionPerHour: Number(
              productionDetails.totalHours
            ).toFixed(1),
            productionHours: Number(productionDetails.efficiency).toFixed(1),
          });
        } else if (selectedView === "Operator") {
          setMonthlyData({
            operatorProduction: Number(productionDetails.production).toFixed(1),
            operatorProductionPerHour: Number(
              productionDetails.totalHours
            ).toFixed(1),
            productionHours: Number(productionDetails.efficiency).toFixed(1),
          });
        }
      } catch (error) {
        console.error("Error fetching monthly production details:", error);
      }
    };

    if (startDate && endDate) {
      fetchMonthlyProductionData();
    }
  }, [selectedDredger, selectedView, startDate, endDate]);

  // Fetch daily oil consumption data.
  // Uses the "date" from the production details (from mount or user selection).
  useEffect(() => {
    const fetchDailyOilConsumption = async () => {
      try {
        const payload = {
          dredger: selectedDredger,
          date: date, // Use the production API's date or user-selected date.
          view: "Operator", // Always use "Operator" for oil consumption endpoints.
        };

        const response = await axios.post(
          "https://reach-backend.vercel.app/admin/serveyOilConsumed",
          payload
        );
        const resData = response.data;

        setOilConsumption((prev) => ({
          ...prev,
          dateCumulative: Number(resData.cumulative).toFixed(1),
          dateUsed: date,
          message: "",
        }));
      } catch (error) {
        console.error("Error fetching daily oil consumption:", error);
        setOilConsumption((prev) => ({
          ...prev,
          message: "Error fetching daily oil consumption.",
        }));
      }
    };

    if (date) {
      fetchDailyOilConsumption();
    }
  }, [selectedDredger, selectedView, date]);

  // Fetch monthly (date-range) oil consumption data.
  // On mount, startDate is the 1st of the month and endDate is today.
  // Also triggers when the user selects a different range.
  useEffect(() => {
    const fetchMonthlyOilConsumption = async () => {
      try {
        const payload = {
          dredger: selectedDredger,
          startDate: startDate,
          endDate: endDate,
          view: "Operator", // Always use "Operator" for oil consumption endpoints.
        };

        const response = await axios.post(
          "https://reach-backend.vercel.app/admin/surveyOilConsumedForGivenRange",
          payload
        );
        const resData = response.data;

        setOilConsumption((prev) => ({
          ...prev,
          rangeCumulative: Number(resData.cumulative).toFixed(1),
        }));
      } catch (error) {
        console.error("Error fetching monthly oil consumption:", error);
        setOilConsumption((prev) => ({
          ...prev,
          message: "Error fetching monthly oil consumption.",
        }));
      }
    };

    if (startDate && endDate) {
      fetchMonthlyOilConsumption();
    }
  }, [selectedDredger, startDate, endDate]);

  return (
    <div>
      <Header />
      <div className="p-6 pt-[5rem] bg-gray-100 min-h-screen">
        {/* Date, Range, and View Section */}
        <DateRangeViewSection
          date={date}
          setDate={setDate}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          selectedDredger={selectedDredger}
          setSelectedDredger={setSelectedDredger}
          selectedView={selectedView}
          setSelectedView={setSelectedView}
          dredgers={dredgers}
        />
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Production Section */}
            <ProductionSection
              selectedView={selectedView}
              selectedDredger={selectedDredger}
              data={data}
              monthlyData={monthlyData}
              showMonth={showMonth}
            />

            {/* Oil Report Section */}
            <OilReportSection
              oilConsumption={oilConsumption}
              showMonth={showMonth}
              selectedDredger={selectedDredger}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
            <OperatorOilComsutionGraph
              date={date}
              startDate={startDate}
              endDate={endDate}
              dredger={selectedDredger}
            />

            {selectedView === "Survey" ? (<div>
              <TotalProductionReport />
              <BlockWiseReport />
            </div>) : ""}
            {selectedView === "Survey" && <div>
              <DykeReportTable />
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Production Analytics Graph */
}
{
  /* <ProductionAnalyticsGraph
            selectedView={selectedView}
            date={date}
            startDate={startDate}
            endDate={endDate}
            selectedDredger={selectedDredger}
          /> */
}

{
  /* Oil Consumption Analytics */
}
{
  /* <OilConsumptionAnalytics oilAnalyticsData={oilAnalyticsData} /> */
}


// {selectedView === "Survey" && (
//             <>
//               <TotalProductionReport />
//               <BlockWiseReport />
//               <DykeReportTable />
//             </>
//           )}

//       </div>
//     */
//    }
