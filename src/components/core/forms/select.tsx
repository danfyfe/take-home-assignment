import { ISelectProps, Option } from "@/interfaces/forms";
import Image from "next/image";

const Select = ({ optionObjects, label, name, value, className, width, icon, onChange }: ISelectProps) => (
  <fieldset className={`${className ? className : ''} flex items-center mb-3`}>
    {
      !!label ? (
        <label htmlFor={`${name}-select`} className="mr-6 text-sm">
          {label}
        </label>
      ) : null
    }
    <select
      id={`${name}-select`}
      onChange={onChange}
      className={`
        h-10 border border-gray-500 rounded-lg appearance-none pl-2
        bg-[url('/select-caret.svg')] bg-no-repeat bg-right
        ${width ? width : ''}
      `}
        value={value}
        name={name}
      >
      {
        optionObjects?.length > 0 && optionObjects.map((option: Option, idx: number) => {
          return (
            <option key={`${option.label}-${idx}`} value={option.value} >{option.label}</option>
          )
        })
      }
    </select>
    {
      !!icon ? (
        <Image src="/clock.png" height={30} width={30} alt="Clock icon" className="ml-2"/>
      ) : null
    }
  </fieldset>
);

export default Select;
