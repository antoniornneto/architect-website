import Container from "@/components/Container";
import TitlePage from "@/components/ui/TitlePage";
import Image from "next/image";
import selos from "../../../assets/selos.jpg";

const Certificacoes = () => {
  return (
    <Container>
      <TitlePage text="Selos" pageName="Certificações" />
      <hr className="w-full border-[1px] border-t-zinc-100" />
      <div className="flex justify-center">
        <Image alt="selos" src={selos} />
      </div>
    </Container>
  );
};

export default Certificacoes;
