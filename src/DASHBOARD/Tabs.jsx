import React from "react";

const tabs = ["Doctors", "Nurses", "Lab Technician", "Pharmacy", "Receptionist"];

export default function Tabs() {
  return (
    <div className="flex gap-2">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`px-5 py-2 rounded-lg text-sm font-medium ${
            idx === 0
              ? "bg-[#5E50F9] text-white"
              : "bg-white text-gray-600 hover:bg-gray-100 border"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
