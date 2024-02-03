import { IParagraphProps } from "@/interfaces/typography";

const P = ({ className, children }: IParagraphProps) => (
  <p
    className={`
      ${className ? className : ''}
      text-blue-primary text-left text-sm
    `}
  >
    {children}
  </p>
);

export default P;
