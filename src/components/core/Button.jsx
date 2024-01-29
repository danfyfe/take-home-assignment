const Button = ({ className, children, onClick, inverted }) => (
  <button
    className={`
      ${className ? className : ''}
      ${inverted ?
        'text-yellow-primary bg-white border-yellow-primary' :
        'text-white bg-blue-primary border-blue-primary'} text-sm
      rounded-lg px-14 py-3 border-2 w-fit flex justify-center items-center
    `}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
