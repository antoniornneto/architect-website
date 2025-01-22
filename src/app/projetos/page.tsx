import Container from "@/components/Container";
import TitlePage from "@/components/ui/TitlePage";

const Projetos = () => {
  return (
    <Container style="space-y-10 h-screen mb-10">
      <TitlePage text="Modelos" pageName="Projetos" />
      <hr className="w-full border-[1px] border-t-zinc-100" />
    </Container>
  );
};

export default Projetos;
