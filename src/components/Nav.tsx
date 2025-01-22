import Link from "next/link";
import Logo from "./ui/Logo";

export const navLinks = [
  { name: "Início", path_name: "/" },
  { name: "Galeria", path_name: "/galeria" },
  { name: "Projetos", path_name: "/projetos" },
  { name: "Certificações", path_name: "/certificacoes" },
  { name: "Contato", path_name: "/contato" },
];

const Navbar = () => {
  return (
    <nav className="h-20 flex items-center max-w-[1280px] w-full justify-between">
      <Logo />
      <ul className="flex gap-10 items-center text-xs">
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
