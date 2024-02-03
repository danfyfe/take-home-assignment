import { IContainerProps } from "@/interfaces/layout";

const Container = ({ className, children }: IContainerProps) => (
  <div
    className={`${className ? className : ''}`}
  >
    {children}
  </div>
);

export default Container;
