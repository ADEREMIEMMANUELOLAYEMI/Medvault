import React from "react";
import { MoreHorizontal } from "lucide-react";

const doctors = new Array(12).fill({
  id: "12345-SEC",
  name: "Femi Yakubu Sam",
  department: "Cardiology",
  phone: "+234 8107929290",
  
});

export default function DoctorTable() {
  return (
    <table className="w-full text-sm border-collapse min-w-[700px]">
      <thead className="bg-gray-50 text-gray-500 text-left">
        <tr>
          <th className="px-4 py-3">
            <input type="checkbox" />
          </th>
          <th className="px-4 py-3 font-medium">Doctor ID</th>
          <th className="px-4 py-3 font-medium">Name</th>
          <th className="px-4 py-3 font-medium">Department</th>
          <th className="px-4 py-3 font-medium">Status</th>
          <th className="px-4 py-3 font-medium">Phone no</th>
          <th className="px-4 py-3 font-medium">Action</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doc, idx) => (
          <tr
            key={idx}
            className="border-t hover:bg-gray-50 transition"
          >
            <td className="px-4 py-3">
              <input type="checkbox" defaultChecked={idx === 2} />
            </td>
            <td className="px-4 py-3">{doc.id}</td>
            <td className="px-4 py-3 flex items-center gap-2">
              <img
                src={doc.avatar}
                alt={doc.name}
                className="w-8 h-8 rounded-full"
              />
              {doc.name}
            </td>
            <td className="px-4 py-3">{doc.department}</td>
            <td className="px-4 py-3">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  idx % 3 === 1
                    ? "bg-gray-100 text-gray-500"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {idx % 3 === 1 ? "Inactive" : "Active"}
              </span>
            </td>
            <td className="px-4 py-3">{doc.phone}</td>
            <td className="px-4 py-3">
              <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

