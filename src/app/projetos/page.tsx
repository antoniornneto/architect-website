import Container from "@/components/Container";
import Card from "@/components/ui/Card";
import TitlePage from "@/components/ui/TitlePage";
import image1 from "../../../assets/azadi-tower-6974106_1280.jpg";
import image2 from "../../../assets/architecture-3588171_1280.jpg";
import image3 from "../../../assets/building-1914309_1280.jpg";
import ElPagination from "@/components/PaginationEl";

const Projetos = () => {
  return (
    <Container style="px-10 flex flex-col justify-center">
      <TitlePage text="Modelos" pageName="Projetos" />
      <hr className="w-full border-[1px] border-t-zinc-100" />
      <div className="space-y-10 flex flex-col items-center">
        <Card title={"Projeto 1"} srcImage={image1} path="/projetos/1" />
        <Card title={"Projeto 2"} srcImage={image2} path="/projetos/2" />
        <Card title={"Projeto 3"} srcImage={image3} path="/projetos/3" />
        <ElPagination />
      </div>
    </Container>
  );
};

export default Projetos;
