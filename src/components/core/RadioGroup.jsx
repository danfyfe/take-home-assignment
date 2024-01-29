const RadioGroup = ({ title, options }) => {
  return (
    <fieldset className="flex">
      <legend className="text-sm text-blue-primary font-bold mb-2">
        {title}
      </legend>
      {
        options?.length > 0 && options.map((option, index) => {
          return (
            <Radio key={`${option.value}+${index}`} label={option.label} value={option.value} />
          )
        })
      }
    </fieldset>
  )
};

const Radio = ({ label, name, className }) => {
  return (
    <div className={`${className ? className : ''} max-w-fit pr-2`}>
      <input id={name} type="radio" name={name} className="" />
      <label for={name} className="ml-2">
        {label}
      </label>
    </div>
  )
};

export default RadioGroup;
