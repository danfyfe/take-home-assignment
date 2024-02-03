import { IIconProps } from "@/interfaces/icons";
import Image from "next/image";

const ClockIcon = ({ className }: IIconProps) => (
  <Image src="/clock.png" height={30} width={30} alt="Clock icon" className={`ml-2 ${className ? className : ''}`}/>
);

export default ClockIcon;
