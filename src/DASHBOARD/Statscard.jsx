// // src/components/StatsCard.jsx
import React from "react";
import { Icon } from "@iconify/react";

/**
 * tone: emerald | indigo | rose | amber
 * icon: any Iconify icon name, e.g. "mdi:account-group"
 */
const tones = {
  emerald: {
    ring: "bg-emerald-50",
    dot: "bg-emerald-100",
    icon: "text-emerald-600",
    arrow: "text-emerald-600",
    chip: "bg-emerald-50",
  },
  indigo: {
    ring: "bg-indigo-50",
    dot: "bg-indigo-100",
    icon: "text-indigo-600",
    arrow: "text-emerald-600", // stays green like the design
    chip: "bg-emerald-50",
  },
  rose: {
    ring: "bg-rose-50",
    dot: "bg-rose-100",
    icon: "text-rose-600",
    arrow: "text-emerald-600",
    chip: "bg-emerald-50",
  },
  amber: {
    ring: "bg-amber-50",
    dot: "bg-amber-100",
    icon: "text-amber-600",
    arrow: "text-emerald-600",
    chip: "bg-emerald-50",
  },
};

const StatsCard = ({ title, value, change = "4% (30 Days)", tone = "emerald", icon = "mdi:account" }) => {
  const c = tones[tone] ?? tones.emerald;

  return (
    <div className="bg-white rounded-[8px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-[255px] h-[145px] p-4 flex flex-col">
      {/* Top row: title + colored circular icon */}
      <div className="flex items-center justify-between">
        <h4 className="text-[#464255] text-[14px] leading-none font-semibold">{title}</h4>

        <div className="relative">
          <div className={`w-[40px] h-[40px] rounded-full ${c.ring}`} />
          <div className={`absolute inset-0 m-[6px] rounded-full ${c.dot} flex items-center justify-center`}>
            <Icon icon={'material-symbols:group'} className={`${c.icon} w-[18px] h-[18px]`} />
          </div>
        </div>
      </div>

      {/* Big value */}
      <p className="mt-3 text-[#464255] text-[36px] leading-[1] font-semibold font-readex">
        {value}
      </p>

      {/* Change chip with green up-arrow (matches screenshot) */}
      <div className="mt-auto flex items-center gap-2">
        <div className={`w-[32px] h-[32px] rounded-full ${c.chip} flex items-center justify-center`}>
          <Icon icon="mingcute:arrow-up-line" className={`${c.arrow} w-[20px] h-[20px]`} />
        </div>
        <span className="text-[12px] text-[#7C7C8D] font-medium">{change}</span>
      </div>
    </div>
  );
};

export default StatsCard;
        