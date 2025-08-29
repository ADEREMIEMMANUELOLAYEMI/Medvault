import React, { useState } from "react";
import { Search, Filter, ArrowUpDown, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "../APPOINTMENTS/Card";
import { Button } from "../APPOINTMENTS/Button";
import { Input } from "../APPOINTMENTS/Input";

const appointmentsData = Array.from({ length: 12 }, (_, i) => ({
  id: `1234${i}-SEC`,
  patient: "Femi Yakubu Sam",
  doctor: "Femi Yakubu Sam",
  date: "23 Aug, 2025",
  status: i % 2 === 0 ? "Completed" : "Unattended",
}));

export default function AppointmentsDashboard() {
  const [appointments] = useState(appointmentsData);

  return (
    <div className="p-4 md:p-8 space-y-6 w-full">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-gray-500 text-sm">Total Appointments</p>
            <h2 className="text-2xl font-semibold">3,799</h2>
            <p className="text-xs text-gray-400">Today (23 Aug, 2025)</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-gray-500 text-sm">Completed Appointments</p>
            <h2 className="text-2xl font-semibold text-green-600">3,205</h2>
            <p className="text-xs text-gray-400">Today (23 Aug, 2025)</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-gray-500 text-sm">Cancelled Appointments</p>
            <h2 className="text-2xl font-semibold text-red-600">594</h2>
            <p className="text-xs text-gray-400">Today (23 Aug, 2025)</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative w-full md:w-1/3">
          <Input placeholder="Search for doctors" className="pl-10 rounded-xl" />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button variant="outline" className="rounded-xl flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4" /> Sort By
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border rounded-2xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 text-left">Appt. ID</th>
              <th className="p-3 text-left">Patients</th>
              <th className="p-3 text-left">Doctors</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{appt.id}</td>
                <td className="p-3">{appt.patient}</td>
                <td className="p-3">{appt.doctor}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">
                  {appt.status === "Completed" ? (
                    <span className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="w-4 h-4" /> {appt.status}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-600">
                      <XCircle className="w-4 h-4" /> {appt.status}
                    </span>
                  )}
                </td>
                <td className="p-3 text-blue-500 cursor-pointer">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm text-gray-600">
        <p>1-12 of 2,000 items</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-xl px-3">Page 1</Button>
          <span>of 50</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border rounded-lg p-1">
            <option>12</option>
            <option>24</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}
