import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import TitlePage from "@/components/ui/TitlePage";
import image1 from "../../../assets/projects/image 30.png";
import image2 from "../../../assets/projects/image 32.png";
import image3 from "../../../assets/projects/image 33.png";

const Projetos = () => {
  return (
    <Container style="px-10 flex flex-col justify-center">
      <TitlePage text="Modelos" pageName="Projetos" />
      <hr className="w-full border-[1px] border-t-zinc-100" />
      <div className="space-y-10">
        <Card srcImage={image3} path="/projetos/3" />
        <Card srcImage={image1} path="/projetos/1" />
        <Card srcImage={image2} path="/projetos/2" />
      </div>
    </Container>
  );
};

export default Projetos;
