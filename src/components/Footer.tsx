import Link from "next/link";
import { navLinks } from "./Nav";
import WhiteLogo from "./ui/WhiteLogo";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiX, SiPinterest } from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="w-full h-[417px] bg-[#2C2C2C] text-white flex flex-col justify-center items-center">
      <div className="max-w-[1280px] w-full py-10 flex-1 flex justify-around">
        <div>
          <WhiteLogo />
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-bold">Mapa do site</p>
          {navLinks.map((item, index) => (
            <Link
              className="hover:underline text-sm"
              key={index}
              href={item.path_name}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-10 text-sm">
          <p className="font-bold text-base">Contatos</p>
          <div className="flex items-center gap-5">
            <MapPin />
            <div>
              <p>1234 Sample Street</p>
              <p>Vitória, Espírito Santo</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Phone />
            <div>
              <p>(27) 3223-9999</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Mail />
            <div>
              <p>contato@digitalproject.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-bold">Redes Sociais</p>
          <div className="flex gap-5">
            <Link href={"/"}>
              <SiFacebook />
            </Link>
            <Link href={"/"}>
              <SiX />
            </Link>
            <Link href={"/"}>
              <SiPinterest />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-white/10 w-full" />
      <div className="max-w-[1280px] flex justify-center items-center py-5">
        <p className="text-xs font-sans opacity-30">
          © 2025 Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
