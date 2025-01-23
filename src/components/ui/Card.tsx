import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import LinkButton from "./LinkButton";

interface CardProps {
  srcImage: string | StaticImport;
  path: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ path, srcImage, title }) => {
  return (
    <div className="w-full flex bg-[#fbfbfb] max-md:flex-col">
      <div className="flex-1 p-6">
        <div className="relative h-full max-md:h-[200px]">
          <Image
            alt="/"
            src={srcImage}
            fill
            sizes="100vw"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="flex-1 p-6 space-y-10 max-w-[40%] max-md:max-w-full">
        <h3 className="text-4xl text-[#bdbdbd] font-light">{title}</h3>
        <p className="text-justify font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          mollitia architecto natus vitae? Molestiae deserunt pariatur nesciunt
          quod, eius fugit sit soluta quam inventore illum vel suscipit sequi
          earum repellat! <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          mollitia architecto natus vitae? Molestiae deserunt pariatur nesciunt
          quod, eius fugit sit soluta quam inventore illum vel suscipit sequi
          earum repellat!
        </p>
        <LinkButton path={path}>Ver mais</LinkButton>
      </div>
    </div>
  );
};

export default Card;
