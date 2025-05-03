import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import logo from "./logo.png";

export default function QRStaffingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-950 text-white px-6 pt-12 pb-6 flex flex-col items-center space-y-10 overflow-y-auto">
      <motion.img
        src={logo}
        alt="Creative Personnel Logo"
        className="w-28 h-auto drop-shadow-xl ml-[-12px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          Need Skilled Workers <span className="text-blue-400">Fast?</span>
        </h1>
        <p className="text-gray-300 max-w-md mx-auto">
          Creative Personnel delivers pre-vetted light industrial staff within 24–48 hours.
          Minimize downtime. Maximize results.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl rounded-xl">
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-blue-400" />
              <h2 className="text-xl font-semibold">Quick Staffing Request</h2>
            </div>
            <form className="space-y-4 text-center">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full text-center p-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full text-center p-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full text-center p-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="# of Workers Needed"
                className="w-full text-center p-3 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none"
              />
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-2 rounded-xl">
                Request Staffing Now
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-sm text-gray-400 max-w-xs text-center"
      >
        A Creative Personnel Specialist will follow up within minutes during business hours.
      </motion.p>
    </div>
  );
}
