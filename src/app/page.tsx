import Image from "next/image";
import projectImage from "../../assets/building.png";
import { MoveLeft, MoveRight, Slash } from "lucide-react";
import Button from "@/components/ui/Button";
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

export default function Home() {
  return (
    <main className="max-w-[1280px] w-full px-16 py-10 space-y-20">
      {/* hero section */}
      <div className="flex">
        <div className="flex flex-col justify-center w-96">
          <TitlePage text1="Digital" text2="Project" />
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
          <Button path="/" style="absolute">
            Visualizar Projeto
          </Button>
        </div>
      </div>
      {/* about */}
      <div>
        <div className="z-0 h-[435px] w-full bg-[#FBFBFB] flex py-5 px-10 gap-8">
          <div className="z-10 flex flex-col gap-8">
            <Image alt="foto" src={img1} />
            <Image alt="foto" src={img3} />
          </div>
          <div className="flex items-center">
            <Image alt="foto" src={img2} />
          </div>
          <div className="flex-1 flex flex-col justify-around">
            <TitleSection>Quem Somos</TitleSection>
            <p className="font-light text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Button path="/">Saiba mais</Button>
          </div>
        </div>
        <div className="h-[30px]"></div>
      </div>
      {/* mission */}
      <div className="space-y-10">
        <TitleSection>Foco/Missão</TitleSection>
        <div className="flex flex-wrap gap-20">
          <div className="flex flex-1 items-center text-justify gap-10">
            <Image alt="1" src={number1} />
            <p className="h-full flex items-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="flex flex-1 items-center text-justify gap-10">
            <Image alt="2" src={number2} />
            <p className="h-full text-wrap flex items-center">
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
        <div className="flex flex-wrap justify-between gap-2 w-full">
          <ImageButton path={project1} />
          <ImageButton path={project2} />
          <ImageButton path={project3} />
          <ImageButton path={project4} />
          <ImageButton path={project5} />
        </div>
        <Button
          path="/projetos"
          style="bg-zinc-800 text-white hover:bg-white hover:text-zinc-800 place-self-end hover:border-[1px] hover:border-zinc-800"
        >
          Todos os projetos
        </Button>
      </div>
      {/* Contact US */}
      <div className="space-y-10 pb-20">
        <TitleSection>Fale Conosco</TitleSection>
        <div className="flex gap-5">
          <form action="" className="w-[400px] flex flex-col justify-between">
            <input
              type="text"
              placeholder="Nome*"
              className="bg-[#F3F3F3] w-full p-3"
            />
            <input
              type="tel"
              placeholder="Telefone*"
              className="bg-[#F3F3F3] w-full p-3"
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="bg-[#F3F3F3] w-full p-3"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="bg-[#F3F3F3] w-full p-3"
            />
            <textarea
              placeholder="Mensagem*"
              rows={4}
              className="w-full bg-[#f3f3f3] p-4"
            />
          </form>
          <div className="flex-1">
            <Image alt="" src={contact} />
          </div>
        </div>
        <Button style="bg-zinc-800 text-white justify-center hover:bg-white hover:text-zinc-800 hover:border-[1px] hover:border-zinc-800">
          Enviar E-mail
        </Button>
      </div>
    </main>
  );
}
