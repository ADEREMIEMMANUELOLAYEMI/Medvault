


import React from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ data }) => {
  return (
    <ResponsiveContainer width={862} height={260}>
      <ReBarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="patientsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B315561" stopOpacity={1} />
            <stop offset="100%" stopColor="#372863F0" stopOpacity={1} />
          </linearGradient>
        </defs>

        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip cursor={{ fill: "rgba(59, 49, 85, 0.38)" }} />
        {/* Use the gradient here */}
        <Bar dataKey="patients" fill="url(#patientsGradient)" radius={[4, 4, 0, 0]} />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;

