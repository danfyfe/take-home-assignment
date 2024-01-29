'use client'
import { useState } from "react";
import { P, } from "@/components/core"
import Image from "next/image";
import ClockIcon from "../core/ClockIcon";
const ToleranceWindow = () => {
  const [toggled, setToggled] = useState(true);
  const handleToggle = () => {
    setToggled(!toggled)
  };

  return (
    <div className="flex mt-4 items-center">
      <div className="relative">
        <div className="w-10 h-6 bg-blue-primary rounded-full shadow-inner"></div>
        <input
          type="checkbox" checked={toggled} value={toggled} onChange={handleToggle} 
          className={`
            absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-md
            transform transition-transform translate-x-0 -translate-y-1/2
            appearance-none 
            ${toggled ? 'right-1' : 'left-1'}
          `}></input>
      </div>
      <label className="ml-4 text-sm min-w-[75px]">Toggle {toggled ? 'ON' : 'OFF'}</label>
      <div className="flex items-center border-l-2 border-blue-primary ml-4">
          <ClockIcon className="ml-5" />
          <P className="ml-1">Select Tolerance Level</P>
      </div>
    </div>
  )
};

export default ToleranceWindow;
