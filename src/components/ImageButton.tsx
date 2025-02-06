import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ImageButtonProps {
  image: string;
  width: number;
  height: number;
  path: string;
  title: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({
  image,
  path,
  height,
  width,
  title,
}) => {
  return (
    <div className="relative">
      <div className="overflow-hidden max-h-[200px] max-w-[380px]">
        <Image
          src={image}
          alt="/"
          width={width}
          height={height}
          className="aspect-[5/4] w-full object-cover lg:aspect-[16/9]"
        />
      </div>
      <Link
        href={`/projetos/${path}`}
        className="absolute bottom-0 h-full w-full text-3xl text-transparent hover:bg-zinc-700/70 transition-all font-bold duration-500 ease-in-out hover:text-white p-8 flex flex-col gap-5 justify-center"
      >
        {title}
        <p className="text-xs flex gap-2 items-center">
          Ver mais <MoveRight size={15} />
        </p>
      </Link>
    </div>
  );
};

export default ImageButton;
