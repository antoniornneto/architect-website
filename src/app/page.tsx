import Image from "next/image";
import projectImage from "../../assets//apartment-2179337_1280.jpg";
import { MoveLeft, MoveRight, Slash } from "lucide-react";
import img1 from "../../assets/Rectangle 8.png";
import img2 from "../../assets/Rectangle 9.png";
import img3 from "../../assets/Rectangle 10.png";
import number1 from "../../assets/1.png";
import number2 from "../../assets/2.png";
import project1 from "../../assets/Rectangle 12.jpg";
import project2 from "../../assets/image 15.png";
import project3 from "../../assets/image 16.png";
import project4 from "../../assets/image 17.png";
import project5 from "../../assets/image 18.png";
import contact from "../../assets/image 12.png";
import ImageButton from "@/components/ImageButton";
import TitleSection from "@/components/ui/TitleSection";
import TitlePage from "@/components/ui/TitlePage";
import Container from "@/components/Container";
import LinkButton from "@/components/ui/LinkButton";

export default function Home() {
  return (
    <Container style="space-y-20">
      {/* hero section */}
      <div className="flex">
        <div className="flex flex-col justify-center w-96">
          <TitlePage text="Digital" pageName="Project" />
          <div className="flex items-center my-20">
            <div className="flex gap-5">
              <button className="w-12 h-12 flex justify-center items-center border-[1px] border-gray-300 active:bg-gray-200">
                <MoveLeft size={20} />
              </button>
              <button className="w-12 h-12 flex justify-center items-center border-[1px] border-gray-300 active:bg-gray-200">
                <MoveRight size={20} />
              </button>
            </div>
            <hr className="border-t-[1px] w-full" />
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-[#BDBDBD] tracking-widest text-2xl">01 </div>
            <Slash color="#e0e0e0" />
            <div className="text-[#BDBDBD] tracking-widest text-2xl">02</div>
          </div>
        </div>
        <div className="relative flex-1">
          <Image alt="Projetos" src={projectImage} className="object-cover" />
          <LinkButton style="absolute" path="/">
            Visualizar Projeto
          </LinkButton>
        </div>
      </div>
      {/* about */}
      <div>
        <div className="w-full bg-[#FBFBFB] flex gap-8 p-6 justify-center">
          <div className="flex flex-col gap-8 md:hidden lg:flex">
            <Image alt="foto" src={img1} />
            <Image alt="foto" src={img3} />
          </div>
          <div className="flex items-center">
            <Image alt="foto" src={img2} />
          </div>
          <div className="flex-1 flex flex-col justify-around">
            <TitleSection>Quem Somos</TitleSection>
            <p className="font-light text-justify max-md:text-sm">
              Somos uma empresa dedicada a transformar sonhos em realidade por
              meio de projetos arquitetônicos e soluções construtivas
              inovadoras. Combinamos técnica, criatividade e compromisso com a
              qualidade para entregar espaços que vão além da estética,
              proporcionando funcionalidade e conforto. Nosso time é formado por
              profissionais experientes e apaixonados pelo que fazem, sempre
              atentos às necessidades e desejos de cada cliente. Valorizamos a
              sustentabilidade e a eficiência em cada etapa do processo,
              buscando não apenas construir, mas deixar um legado positivo para
              as pessoas e o meio ambiente.
            </p>
            <LinkButton path="/galeria">Saiba mais</LinkButton>
          </div>
        </div>
      </div>
      {/* mission */}
      <div className="space-y-10">
        <TitleSection>Foco/Missão</TitleSection>
        <div className="flex gap-20 max-md:flex-col">
          <div className="flex flex-1 items-center text-justify gap-10">
            <Image alt="1" src={number1} />
            <p className="h-full flex items-center font-light">
              Transformamos sonhos em realidade ao projetar e construir espaços
              funcionais, sustentáveis e inspiradores. Nosso compromisso é com a
              excelência, unindo criatividade, técnica e inovação em cada
              detalhe para entregar resultados que superem expectativas.
            </p>
          </div>
          <div className="flex flex-1 items-center text-justify gap-10">
            <Image alt="2" src={number2} />
            <p className="h-full text-wrap flex items-center font-light">
              Nossa missão é criar soluções arquitetônicas e construtivas que
              valorizem a qualidade de vida, respeitem o meio ambiente e
              reflitam a identidade de cada cliente. Buscamos transformar ideias
              em obras que impactem positivamente as pessoas e os lugares onde
              atuamos.
            </p>
          </div>
        </div>
      </div>
      {/* Our Projects */}
      <div className="space-y-10">
        <TitleSection>Nossos Projetos</TitleSection>
        <div className="flex flex-wrap justify-evenly gap-5 w-full">
          <ImageButton path={project1} />
          <ImageButton path={project2} />
          <ImageButton path={project3} />
          <ImageButton path={project4} />
          <ImageButton path={project5} />
        </div>
        <LinkButton
          path="/projetos"
          style="bg-zinc-800 text-white hover:bg-white hover:text-zinc-800 place-self-end hover:border-[1px] hover:border-zinc-800"
        >
          Todos os projetos
        </LinkButton>
      </div>
      {/* Contact US */}
      <div className="space-y-10">
        <TitleSection>Fale Conosco</TitleSection>
        <div className="flex gap-5 w-full h-full">
          <form className="min-w-[400px] flex flex-col gap-2 flex-1">
            <input
              type="text"
              placeholder="Nome*"
              className="bg-[#F3F3F3] flex-1 p-3"
            />
            <input
              type="tel"
              placeholder="Telefone*"
              className="bg-[#F3F3F3] flex-1 p-3"
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="bg-[#F3F3F3] flex-1 p-3"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="bg-[#F3F3F3] flex-1 p-3"
            />
            <textarea
              placeholder="Mensagem*"
              rows={4}
              className="w-full bg-[#f3f3f3] p-4"
            />
          </form>
          <div className="flex-1 max-md:hidden">
            <div className="relative h-full">
              <Image
                alt="/"
                src={contact}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <LinkButton
          path="/"
          style="bg-zinc-800 text-white justify-center hover:bg-white hover:text-zinc-800 hover:border-[1px] hover:border-zinc-800"
        >
          Enviar E-mail
        </LinkButton>
      </div>
    </Container>
  );
}
