import { IH2Props } from "@/interfaces/typography";

const H2 = ({ className, children }: IH2Props) => (
  <h2
    className={`
      ${className ? className : ''}
      text-4xl font-bold text-center
      text-blue-primary
    `}
  >
    {children}
  </h2>
);

export default H2;
