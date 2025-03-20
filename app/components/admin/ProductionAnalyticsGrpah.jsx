// components/ProductionAnalyticsGraph.js
"use client";
import React from "react";
import SurveyProductionGraph from "@/app/components/Graph/SurveyProduction";
import OperatorProductionGraph from "@/app/components/Graph/OperatorProduction";

export default function ProductionAnalyticsGraph({
  selectedView,
  date,
  startDate,
  endDate,
  selectedDredger,
}) {
  return (
    <>
      {selectedView === "Survey" ? (
        <SurveyProductionGraph
          date={date}
          startDate={startDate}
          endDate={endDate}
          dredger={selectedDredger}
        />
      ) : (
        <OperatorProductionGraph
          date={date}
          startDate={startDate}
          endDate={endDate}
          dredger={selectedDredger}
        />
      )}
    </>
  );
}
