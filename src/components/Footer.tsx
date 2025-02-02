import Link from "next/link";
import { navLinks } from "./Nav";
import WhiteLogo from "./ui/WhiteLogo";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiX, SiPinterest } from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2c2c2c] text-white">
      <div className="flex gap-20 p-10 justify-center max-md:gap-10 max-md:flex-col max-md:items-center">
        <div className="max-sm:hidden">
          <WhiteLogo />
        </div>
        <div className="flex items-center gap-20 max-sm:flex-col max-md:h-fit max-md:gap-8">
          <div className="flex flex-wrap flex-col h-52 justify-between">
            <p>Mapa do Site</p>
            {navLinks.map((item, index) => (
              <Link
                className="font-light text-sm"
                href={item.path_name}
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col h-52 justify-between">
            <p>Contatos</p>
            <div className="flex gap-5 font-light text-sm">
              <MapPin />
              <p>Rua Alameda, nº 1234, Vitória, ES, 29230-000</p>
            </div>
            <div className="flex gap-5 font-light text-sm">
              <Phone />
              <p>(27) 3223-9999</p>
            </div>
            <div className="flex gap-5 font-light text-sm">
              <Mail />
              <p>contato@digitalproject.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>Redes Sociais</p>
            <div className="flex gap-5">
              <SiFacebook />
              <SiX />
              <SiPinterest />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <hr className="border-t-[1px] border-zinc-100/10 w-full" />
        <p className="text-xs text-zinc-100/20 py-3">
          Copyright © 2025 Antonio Nascimento
        </p>
      </div>
    </footer>
  );
};

export default Footer;
