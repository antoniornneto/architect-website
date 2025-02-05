import Container from "@/components/Container";
import TitlePage from "@/components/ui/TitlePage";
import Image from "next/image";
import image1 from "../../../../assets/project/image 33.png";
import image2 from "../../../../assets/project/image 34.png";
import image3 from "../../../../assets/project/image 35.png";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return [{ slug: "projetos" }];
}

const project = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  return (
    <Container>
      <TitlePage text="Modelo" pageName={`Project ${slug}`} />
      <hr className="w-full border-[1px] border-t-zinc-100" />
      <div className="space-y-10">
        <Image alt="/" src={image1} />
        <div className="flex gap-5">
          <Image alt="/" src={image2} />
          <p className="font-light text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with.
          </p>
        </div>
        <Image alt="/" src={image3} />
      </div>
    </Container>
  );
};

export default project;
