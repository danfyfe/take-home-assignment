import { P } from "@/components/core/typography"
import ClockIcon from "../core/icons/clock-icon";
import { IToleranceWindowProps } from "@/interfaces/document-upload";
const ToleranceWindow = ({ name, value, onChange}: IToleranceWindowProps) => (
  <>
    <P className="font-bold">Tolerance Window:</P>
    <div className="flex mt-2 items-center">
      <div className="relative">
        <div className="w-10 h-6 bg-blue-primary rounded-full shadow-inner"></div>
        <input
          name={name}
          value={value ? 'true' : undefined}
          type="checkbox"
          checked={value}
          onChange={onChange} 
          className={`
            absolute top-1/2 w-4 h-4 bg-white rounded-full shadow-md
            transform transition-transform translate-x-0 -translate-y-1/2
            appearance-none 
            ${value ? 'right-1' : 'left-1'}
          `}></input>
      </div>
      <label className="ml-4 text-sm min-w-[75px]">Toggle {value ? 'ON' : 'OFF'}</label>
      <div className="flex items-center border-l-2 border-blue-primary ml-4">
          <ClockIcon className="ml-5" />
          <P className="ml-1">Select Tolerance Level</P>
      </div>
    </div>
  </>
);

export default ToleranceWindow;
