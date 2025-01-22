import Image from "next/image";
import logo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className="px-2">
      <Image src={logo} width={100} alt="logo" className="object-cover" />
    </div>
  );
};

export default Logo;
