// src/pages/DepartmentManagement.jsx
import React from "react";
import { Button } from "../COMPONENTS/Ui/Button"; // if using shadcn/ui
import Cardiology from "../assets/IMAGES/Cardiology.png";
import Dentist from "../assets/IMAGES/Dentist.png";
import Gynacology from "../assets/IMAGES/Gynacology.png";
import labScience from "../assets/IMAGES/labScience.png";
import Pshchatary from "../assets/IMAGES/Pshchatary.png";
import Pediatry from "../assets/IMAGES/Pediatry.png";
import Emergency from "../assets/IMAGES/Emergency.png";
import Orthopedics from "../assets/IMAGES/Orthopedics.png";

const departments = [
  { id: 1, name: "CARDIOLOGY", img: Cardiology },
  { id: 2, name: "DENTAL", img: Dentist },
  { id: 3, name: "GYNAECOLOGY", img: Gynacology },
  { id: 4, name: "LAB SCIENCE", img: labScience },
  { id: 5, name: "PSYCHIATRY", img: Pshchatary },
  { id: 6, name: "PEDIATRICS", img: Pediatry },
  { id: 7, name: "EMERGENCY", img: Emergency},
  { id: 8, name: "ORTHOPEDICS", img: Orthopedics },
];

const DepartmentManagement = () => {
  return (
    <section className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold text-gray-800">
          Hospital Department
        </h1>
        <Button className="bg-[#2C26DB] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1e1aa7]">
          + Add Department
        </Button>
      </div>

      {/* Grid of Departments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white rounded-lg shadow p-3 flex flex-col"
          >
            {/* Image */}
            <img
              src={dept.img}
              alt={dept.name}
              className="w-full h-[140px] object-cover rounded-md"
            />

            {/* Department Name */}
            <h2 className="text-center text-[#2C26DB] font-semibold text-[14px] mt-3 uppercase tracking-wide">
              {dept.name}
            </h2>

            {/* Stats */}
            <div className="mt-2 text-xs text-gray-600 space-y-1">
              <p>Total Doctors: <span className="font-semibold">640</span></p>
              <p className="text-green-600">● Active doctors: 537</p>
              <p className="text-red-500">● Inactive doctors: 103</p>
            </div>

            {/* Button */}
            <button className="mt-3 bg-[#2C2C2C] text-white text-xs py-2 rounded-md hover:bg-black">
              View More
            </button>
          </div>
        ))}
      </div>

      {/* See All */}
      <div className="flex justify-end mt-6">
        <Button
          variant="outline"
          className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
        >
          See all
        </Button>
      </div>
    </section>
  );
};

export default DepartmentManagement;
