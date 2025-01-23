import Link from "next/link";
import Logo from "./ui/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

export const navLinks = [
  { name: "Início", path_name: "/" },
  { name: "Galeria", path_name: "/galeria" },
  { name: "Projetos", path_name: "/projetos" },
  { name: "Certificações", path_name: "/certificacoes" },
  { name: "Contato", path_name: "/contato" },
];

const Navbar = () => {
  return (
    <nav className="h-20 flex items-center max-w-[1280px] w-full justify-between px-10">
      <Logo />
      <div className="hidden max-md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navLinks.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link href={item.path_name}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ul className="flex gap-10 items-center text-xs max-md:hidden">
        {navLinks.map((item, index) => (
          <li
            className="border-zinc-900 hover:border-y-[1px] px-3 text-center cursor-pointer"
            key={index}
          >
            <Link className="uppercase tracking-widest " href={item.path_name}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
