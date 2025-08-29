import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-[#1B36A7] text-white py-16 px-6 lg:px-20">
      {/* Top Section */}
      <div className="text-center space-y-6">
        <p className="text-[14px] uppercase tracking-widest text-[#FFFFFF] font-Circular space-[2.8px] leading-[100%]">
          Upskill For A Better Future
        </p>
        <h2 className="text-[50px] font-['Abhaya_Libre'] text-[#FFFFFF] leading-[100%]  ">
          Request More Information
        </h2>
        <p className="text-[#FFFFFF] max-w-xl mx-auto text-sm font-Circular text-[18px] leading-[33px]">
          Lift Medis, LLC is a clinical stage healthcare company which is developing a unique.
        </p>
        <button className="bg-white text-blue-900 font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>

      {/* Divider */}
      <div className=" my-12"></div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo192.png" // replace with your actual logo path
            alt="Medilink Logo"
            className="h-8"
          />
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#">Team</a>
          <a href="#">Case Studies</a>
          <a href="#">Publications</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="p-2 rounded-full border border-gray-500 hover:bg-gray-700 transition">
            <Icon icon="mdi:linkedin" className="text-xl" />
          </a>
          <a href="#" className="p-2 rounded-full border border-gray-500 hover:bg-gray-700 transition">
            <Icon icon="mdi:facebook" className="text-xl" />
          </a>
          <a href="#" className="p-2 rounded-full border border-gray-500 hover:bg-gray-700 transition">
            <Icon icon="mdi:instagram" className="text-xl" />
          </a>
          <a href="#" className="p-2 rounded-full border border-gray-500 hover:bg-gray-700 transition">
            <Icon icon="mdi:youtube" className="text-xl" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-10">
        © 2019 Lift Medis, LLC
      </div>
    </footer>
  );
}
