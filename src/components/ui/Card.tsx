import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import LinkButton from "./LinkButton";

interface CardProps {
  srcImage: string | StaticImport;
  path: string;
}

const Card: React.FC<CardProps> = ({ path, srcImage }) => {
  return (
    <div className="flex flex-wrap">
      <Image alt="/" src={srcImage} className="flex-1" />
      <div className="space-y-20 bg-[#FBFBFB] p-10 flex-1">
        <h3 className="text-4xl text-[#bdbdbd] font-light">Sample Project</h3>
        <p className="font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <LinkButton path={path}>Ver Mais</LinkButton>
      </div>
    </div>
  );
};

export default Card;
