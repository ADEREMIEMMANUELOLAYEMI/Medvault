import React from "react";

export default function Pagination() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-600 gap-3">
      <p>1-12 of 2,000 items</p>
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&lt;</button>
        <span>Page <b>1</b> of 30</span>
        <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&gt;</button>
      </div>
      <div className="flex items-center gap-2">
        <span>Show</span>
        <select className="border rounded-lg px-2 py-1">
          <option>12</option>
          <option>24</option>
          <option>48</option>
        </select>
      </div>
    </div>
  );
}

