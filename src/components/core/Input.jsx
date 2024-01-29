const Input = ({ className, type, label, name,  }) => (
  <label>
    {label}
    <input
      name={name}
      type={type}
      className={`
        ${className ? className : ''}
      `}
    />
  </label>
);

export default Input;
