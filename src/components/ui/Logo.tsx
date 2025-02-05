import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="px-2">
      <Image src={logo} width={100} alt="logo" className="object-cover" />
    </Link>
  );
};

export default Logo;
