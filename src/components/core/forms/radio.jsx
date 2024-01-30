
const Radio = ({ label, name, value, className, onChange }) => (
  <div className={`${className ? className : ''} max-w-fit pr-2`}>
    <input id={`${name}-${value}`} type="radio" name={name} value={value} onChange={onChange} />
    <label htmlFor={`${name}-${value}`} className="ml-2">
      {label}
    </label>
  </div>
);

export default Radio;
