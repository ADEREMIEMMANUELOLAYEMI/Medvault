import React, { useState } from "react";
import Specialist from "../../assets/IMAGES/Specialist.png"; // replace with your real image path

export default function HealthSpecialist() {
  const [activeTab, setActiveTab] = useState("Doctor");

  const tabs = ["Doctor", "Nurses", "Lab Technicians", "Pharmacy", "Receptionist"];

  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Image */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src={Specialist}
          alt="Doctor working"
          className="h-full w-full object-cover"
        />
        {/* Carousel dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 md:px-16 relative">
        <div className="max-w-md w-full">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Health Specialist
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form Header */}
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            {activeTab}’s Sign in
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Use your information to sign into your account.
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Hospital */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Hospital
              </label>
              <select className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Jos University Teaching Hospital (JUTH)</option>
                <option>Lagos University Teaching Hospital (LUTH)</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Department
              </label>
              <select className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Jos University Teaching Hospital (JUTH)</option>
                <option>Other Department</option>
              </select>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Darjuma"
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Musa"
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Doctor's License Number */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                {activeTab} License Number
              </label>
              <input
                type="text"
                placeholder="1234567/ABCDF"
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Next
            </button>
          </form>

          {/* Login link */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an Account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
