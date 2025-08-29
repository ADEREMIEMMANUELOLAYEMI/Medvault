// src/App.jsx
import React from "react";
import StatsCard from "../DASHBOARD/Statscard";
import BarChart from "../DASHBOARD/BarChart";
// import { FaUserMd, FaHospital, FaUsers } from "react-icons/fa";

const App = () => {
  const stats = [
    {
      title: "Active Patients",
      value: "34,000",
      change: "+8% (30 Days)",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Total Doctors",
      value: "2,468",
      change: "+4% (30 Days)",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Emergency",
      value: "22,459",
      change: "+6% (30 Days)",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Appointments",
      value: "7,632",
      change: "-3% (30 Days)",
      color: "bg-red-100 text-red-700",
    },
  ];

  const chartData = [
    { month: "JAN", patients: 1200 },
    { month: "FEB", patients: 900 },
    { month: "MAR", patients: 1500 },
    { month: "APR", patients: 800 },
    { month: "MAY", patients: 1100 },
    { month: "JUN", patients: 950 },
    { month: "JUL", patients: 1300 },
    { month: "AUG", patients: 1250 },
    { month: "SEP", patients: 1150 },
    { month: "OCT", patients: 1400 },
    { month: "NOV", patients: 1350 },
    { month: "DEC", patients: 1380 },
  ];

  return (
    <div className='min-h-screen bg-[#F7F6F9]  w-fit p-10 '>
      {/* Stats Section */}
      <div className='grid grid-cols-1 md:grid-cols-4  mb-8 justify-around  '>
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      {/* Chart Section */}
      <div className='bg-[#FFFFFF] p-6  shadow'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-[#000000] text-[16px] leading-[100%]  '>
            Active Patients
          </h1>
          <span className='text-[#2C2C2C] text-[14px] leading-[100%] font-medium'>
            Month
          </span>
        </div>

        <BarChart data={chartData} />
      </div>
    </div>
  );
};

export default App;
