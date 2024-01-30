const RadioGroup = ({ title, className, children }) => (
  <fieldset className={`flex ${className ? className : ''}`}>
    <legend className="text-sm text-blue-primary font-bold mb-5">
      {title}
    </legend>
    {children}
  </fieldset>
);

export default RadioGroup;
