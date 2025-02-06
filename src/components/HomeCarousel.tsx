"use client";
import TitlePage from "@/components/ui/TitlePage";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Slash } from "lucide-react";
import React from "react";
import Image from "next/image";
import { ProjectsProps } from "@/lib/utils";
import LinkButton from "./ui/LinkButton";

const HomeCarousel = ({
  carouselImg,
}: {
  carouselImg: Array<ProjectsProps>;
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="flex items-center justify-center gap-40 max-lg:flex-col max-lg:gap-10"
      >
        <div className="flex flex-col gap-10">
          <TitlePage pageName="Project" text="Digital" />
          <div className="flex gap-4 text-[#bdbdbd]">
            0{current}
            <Slash />0{count}
          </div>
        </div>

        <div className="relative">
          <CarouselContent>
            {carouselImg.map((item, index) => (
              <CarouselItem key={index}>
                <div>
                  <div className="overflow-hidden relative">
                    <Image
                      src={item.image.path}
                      alt="/"
                      width={item.image.width}
                      height={item.image.height}
                      className="aspect-[5/4] w-full object-cover lg:aspect-[16/9]"
                    />
                  </div>
                  <LinkButton path={`/projetos/${item.id}`} style="absolute">
                    Ver Projeto
                  </LinkButton>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
