import Container from "@/components/Container";
import TitlePage from "@/components/ui/TitlePage";
import Image from "next/image";
import image1 from "../../../assets/gallery/Rectangle 22.png";
import image2 from "../../../assets/gallery/Rectangle 23.png";
import image3 from "../../../assets/gallery/Rectangle 24.png";
import image4 from "../../../assets/gallery/Rectangle 25.png";
import image5 from "../../../assets/gallery/Rectangle 26.png";
import image6 from "../../../assets/gallery/Rectangle 27.png";
import image7 from "../../../assets/gallery/Rectangle 28.png";
import image8 from "../../../assets/gallery/Rectangle 29.png";
import image9 from "../../../assets/gallery/Rectangle 30.png";
import image10 from "../../../assets/gallery/Rectangle 31.png";
import ElPagination from "@/components/PaginationEl";

const Galeria = () => {
  return (
    <Container>
      <TitlePage text="Fotos" pageName="Galeria" />
      <hr className="w-full border-[1px] border-t-zinc-100" />
      <div className="flex gap-5 flex-wrap">
        <Image alt="/" src={image1} />
        <Image alt="/" src={image2} />
        <Image alt="/" src={image3} />
        <Image alt="/" src={image4} />
        <Image alt="/" src={image5} />
        <Image alt="/" src={image6} />
        <Image alt="/" src={image7} />
        <Image alt="/" src={image8} />
        <Image alt="/" src={image9} />
        <Image alt="/" src={image10} />
      </div>
      <ElPagination />
    </Container>
  );
};

export default Galeria;
