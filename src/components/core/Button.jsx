const Button = ({ children, onClick }) => (
  <button
    className={`
      ${className ? className : ''}
    `}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
