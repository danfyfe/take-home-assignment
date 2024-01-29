const Button = ({ className, children, onClick, inverted }) => (
  <button
    className={`
      ${className ? className : ''}
      ${inverted ?
        'text-yellow-primary bg-white border-yellow-primary' :
        'text-white bg-blue-primary border-blue-primary'}
      rounded-lg p-2 border-2 w-fit
    `}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
