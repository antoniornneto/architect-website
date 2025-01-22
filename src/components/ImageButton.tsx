import { MoveRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ImageButtonProps {
  path: StaticImageData;
}

const ImageButton: React.FC<ImageButtonProps> = ({ path }) => {
  return (
    <div className="relative">
      <Link
        href={"/"}
        className="absolute text-transparent text-6xl flex flex-col hover:bg-zinc-700/80 transition-all font-bold duration-500 ease-in-out cursor-pointer w-full h-full hover:text-white p-8"
      >
        <p>Sample</p>
        <p>Project</p>
        <p className="text-xs pt-5 font-normal flex gap-5 uppercase tracking-widest">
          Ver mais
          <MoveRight size={15} />
        </p>
      </Link>
      <Image alt="/" src={path} />
    </div>
  );
};

export default ImageButton;
