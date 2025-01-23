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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <LinkButton path="/">Saiba mais</LinkButton>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="flex flex-1 items-center text-justify gap-10">
            <Image alt="2" src={number2} />
            <p className="h-full text-wrap flex items-center font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
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
