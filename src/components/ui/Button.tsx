import { MoveRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: string;
  style?: string;
  path?: string;
}

const Button: React.FC<ButtonProps> = ({ children, style, path = "/" }) => {
  return (
    <Link
      className={`${style} bottom-0 flex p-3 gap-2 uppercase w-52 h-16 bg-white items-center text-xs tracking-[2px] transition-all duration-700 ease-in-out hover:bg-black hover:text-white`}
      href={path}
    >
      {children}
      <MoveRight size={15} />
    </Link>
  );
};

export default Button;
