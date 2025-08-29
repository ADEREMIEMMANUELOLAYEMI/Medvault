import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full md:w-72">
      <input
        type="text"
        placeholder="Search for doctors"
        className="w-full border rounded-lg py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5E50F9]"
      />
      <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
    </div>
  );
}
