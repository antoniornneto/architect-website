import Container from "@/components/Container";
import LinkButton from "@/components/ui/LinkButton";
import TitlePage from "@/components/ui/TitlePage";

const Contato = () => {
  return (
    <Container style=" mb-10 flex justify-between items-center">
      <div className="font-light space-y-10">
        <TitlePage text="Dúvidas" pageName="Contato" />
        <div>
          <p className="font-bold">Digital Project</p>
          <p>Sample Street, nº 1234, Vitória, Espírito Santo</p>
        </div>
        <p className="font-bold">(27) 3223-9999</p>
        <p>contato@digitalproject.com</p>
        <LinkButton style="bg-zinc-800 text-white hover:border-[2px] hover:bg-white hover:text-zinc-800 hover:font-bold">
          Entre em Contato
        </LinkButton>
      </div>
      <div className="border-[1px] border-zinc-900 max-w-[800px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.4664149487469!2d-40.297497530375956!3d-20.30582699882305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817c36d101b55%3A0xa128bd6e1bd09dbf!2sLua%20Azul%20Constru%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1737555122957!5m2!1spt-BR!2sbr"
          width="700"
          height="600"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  );
};

export default Contato;
