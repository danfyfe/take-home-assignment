import { IButtonProps } from "@/interfaces/forms";

const Button = ({ className, children, onClick, inverted, type="button" }: IButtonProps) => (
  <button
    type={type}
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
