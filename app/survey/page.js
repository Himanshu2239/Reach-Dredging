"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SurveyOilReport from "../components/SurveyOilReport.jsx.jsx";
import Header from "../components/Header.js";

// Options for dropdowns
const shiftOptions = ["Select shift", "Day", "Night"];
const dredgerOptions = ["Select dredger type", "K7", "K9", "K14", "K15"];
const dykeOptions = Array.from({ length: 16 }, (_, i) => `Dyke ${i + 1}`);
const blockOptions = ["Select block", "Block A", "Block B", "Block C"];

const SurveyWorkLogReport = () => {
  const [formData, setFormData] = useState({
    date: "",
    dredger: "Select dredger type",
    shift: "Select shift",
    forward: "",
    width: "",
    depth: "",
    dyke: "Dyke 1",
    block: "Select block",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const { date, dredger, shift, forward, width, depth, dyke, block } = formData;
    if (
      !date ||
      dredger === "Select dredger type" ||
      shift === "Select shift" ||
      !forward ||
      !width ||
      !depth ||
      block === "Select block"
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    
    const token = localStorage.getItem("accessToken")

    if(!token){
      toast.error('Authorization failed')
      return;
    }
    
    // console.log("token", token);

    try {
      // Submit data to backend
      const response = await fetch("http://localhost:5001/survey/addSurveyData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Survey work log submitted successfully!");
        // Reset form
        setFormData({
          date: "",
          dredger: "Select dredger type",
          shift: "Select shift",
          forward: "",
          width: "",
          depth: "",
          dyke: "Dyke 1",
          block: "Select block",
        });
      } else {
        const errorData = await response.json();
        toast.error(`Failed to submit: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the report.");
    }
  };

  const images = [
    "/image_1.jpeg",
    "/image_2.jpeg",
    "/image_3.jpeg",
    // "/image-4.jpeg",
  ];

  return (
    <div>
    <Header/>
    <div style={{ backgroundImage: `url(${images[0]})` }} className="min-h-screen pt-[6rem]   flex flex-col items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Survey Work Log Report
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* dredger Dropdown */}
            <div>
              <label htmlFor="dredger" className="block text-gray-700 font-medium mb-2">
                dredger
              </label>
              <select
                id="dredger"
                name="dredger"
                value={formData.dredger}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {dredgerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {/* Shift */}
            <div>
              <label htmlFor="shift" className="block text-gray-700 font-medium mb-2">
                Shift
              </label>
              <select
                id="shift"
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {shiftOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {/* Forward */}
            <div>
              <label htmlFor="forward" className="block text-gray-700 font-medium mb-2">
                Forward
              </label>
              <input
                type="number"
                id="forward"
                name="forward"
                value={formData.forward}
                onChange={handleChange}
                placeholder="Enter forward value"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Width */}
            <div>
              <label htmlFor="width" className="block text-gray-700 font-medium mb-2">
                Width
              </label>
              <input
                type="number"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder="Enter width"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Depth */}
            <div>
              <label htmlFor="depth" className="block text-gray-700 font-medium mb-2">
                Depth
              </label>
              <input
                type="number"
                id="depth"
                name="depth"
                value={formData.depth}
                onChange={handleChange}
                placeholder="Enter depth"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Dyke */}
            <div>
              <label htmlFor="dyke" className="block text-gray-700 font-medium mb-2">
                Dyke
              </label>
              <select
                id="dyke"
                name="dyke"
                value={formData.dyke}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {dykeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {/* Block */}
            <div>
              <label htmlFor="block" className="block text-gray-700 font-medium mb-2">
                Block
              </label>
              <select
                id="block"
                name="block"
                value={formData.block}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {blockOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Submit Report
            </button>
          </div>
        </form>
        {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar /> */}
      </div>
      <SurveyOilReport/>
    </div>
    </div>
  );
};

export default SurveyWorkLogReport;
