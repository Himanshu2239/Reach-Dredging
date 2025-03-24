"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// import Router from "next/router"

export default function LoginForm() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/image_1.jpeg",
    "/image_2.jpeg",
    "/image_3.jpeg",
    // "/image-4.jpeg",
  ];

  const router = useRouter();

  // Automatically rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Clear any previous errors
    const jobId = loginId;

    try {
      const response = await axios.post("https://reach-backend.vercel.app/user/login", {
        jobId, // Send jobId instead of username
        password,
      });

      // if(response.status === 500){
      //   setError("Login failed. Please check your credentials and try again.");
      //   return;
      // }

      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);

        const userRole = response.data.data.user.role;

        if (userRole) {
          const userDetails = {
            name: response.data.data.user.fullName,
            jobId: response.data.data.user.jobId,
            role: userRole,
            area: response.data.data.user.area
          };

          localStorage.setItem("userDetails", JSON.stringify(userDetails));
         // Role based navigation
          if (userRole === "Survey") {
            router.push("/survey");
          } else if (userRole === "Operator") {
            router.push("/Operator");
          } else if (userRole === "admin") {
            router.push("/admin");
          } else {
            router.push("/login");
          }
        }
      }
      
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false); // End loading
    }
};


  // KeyDown handler: moves focus from loginId to password or submits form
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      if (e.target.id === "loginId") {
        // Move focus to the password field
        document.getElementById("password")?.focus();
      } else if (e.target.id === "password") {
        // Trigger the login process if on the password field
        handleLogin(e);
      }
    }
  };

  if (loading) {
    return  <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Dredger Icon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="w-16 h-16"
      >
        🚢
      </motion.div>

      {/* Water Waves */}
      <div className="relative w-48 h-4 mt-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-500 opacity-50 animate-wave"></div>
        <div className="absolute inset-0 bg-blue-400 opacity-30 animate-wave delay-200"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-lg font-semibold text-gray-300 animate-pulse">
        Loading Dashboard...
      </p>
    </div>

    </>
  }


  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-900"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-10 rounded-lg shadow-xl w-full max-w-md relative overflow-hidden bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md">
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>

        <Image
          src="/logo.jpeg"
          alt="User"
          width={200}
          height={200}
          className="mx-auto relative z-10 mb-6 animate-bounce rounded-md"
        />

        <h1 className="text-3xl font-extrabold text-center text-white relative z-10 mb-6">
          Welcome 
        </h1>

        <form
          onSubmit={handleLogin}
          onKeyDown={handleKeyDown}
          className="space-y-6 relative z-10"
        >
          {/* Login ID Field */}
          <div>
            <label
              htmlFor="loginId"
              className="block text-sm font-semibold text-white mb-2"
            >
              Login ID
            </label>
            <input
              type="text"
              id="loginId"
              placeholder="Enter your login ID"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-md hover:shadow-lg"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-white mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-md hover:shadow-lg"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="text-red-500">{error}</p>

        <p className="text-sm text-center text-white mt-6 relative z-10">
          Forgot your password?{" "}
          <a href="#" className="text-blue-300 hover:underline">
            Click here
          </a>
        </p>
      </div>
    </div>
  );
}
