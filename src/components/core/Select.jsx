
const Select = ({ options, label, name }) => {
  return (
    <label for={name}>
      {label}
      <select className="
        w-full h-10 border border-gray-500 rounded-lg appearance-none pl-2
        bg-[url('/select-caret.svg')] bg-no-repeat bg-right
      ">
        {
          options?.length > 0 && options.map((option, idx) => {
            return (
              <option key={`${option.label}-${idx}`} value={option.value} >{option.label}</option>
            )
          })
        }
      </select>
    </label>
  )
};

export default Select;
