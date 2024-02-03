export interface IContentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface IContainerProps extends IContentProps{}

export interface IHRProps extends IContentProps {}

export interface ISectionProps extends IContentProps {}