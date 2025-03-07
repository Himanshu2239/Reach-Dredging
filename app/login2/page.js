"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-neutral-900 overflow-hidden">
      {/* Base Layer: Full-Screen Background Image */}
      <motion.img
        src="/seamless3.jpeg" // Replace with your base image path
        alt="Base Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Background Image 1 (Left) */}
      <motion.img
        src="/seamless1.jpeg" // Replace with actual image path
        alt="Background Image 1"
        className="absolute w-1/2 h-full object-cover left-0 z-10"
        initial={{ x: "-50%" }}
        animate={{
          x: ["-50%", "-15%", "-20%", "-18%", "-22%", "-20%"],
        }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Background Image 2 (Right) */}
      <motion.img
        src="/seamless2.jpeg" // Replace with actual image path
        alt="Background Image 2"
        className="absolute w-1/2 h-full object-cover right-0 z-10"
        initial={{ x: "50%" }}
        animate={{
          x: ["50%", "15%", "20%", "18%", "22%", "20%"],
        }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Glassmorphism Login Form */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="z-20 w-full max-w-sm p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-bold text-center text-white">
          Rashmi Seamless
        </h1>

        {/* Login ID Field */}
        <div className="mb-6 font-bold text-white">
          <Label htmlFor="loginId" className="text-white font-bold">
            Login ID
          </Label>
          <Input
            id="loginId"
            placeholder="Enter your login ID"
            className="mt-2"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6 font-bold text-white">
          <Label htmlFor="password" className="text-white font-bold">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="mt-2"
          />
        </div>

        {/* Submit Button */}
        <Button variant="default" className="w-full">
          Submit
        </Button>
      </motion.div>
    </div>
  );
}
