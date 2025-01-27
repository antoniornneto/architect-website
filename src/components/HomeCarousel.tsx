"use client";
import TitlePage from "@/components/ui/TitlePage";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Slash } from "lucide-react";
import React from "react";
import Image from "next/image";

type CarouselProps = {
  id: string;
  title: string;
  image: {
    path: string;
    width: number;
    height: number;
  };
  description: string;
};

const HomeCarousel = ({
  carouselImg,
}: {
  carouselImg: Array<CarouselProps>;
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
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="flex items-center justify-center gap-40 max-md:flex-col"
      >
        <div className="flex flex-col items-center gap-10">
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
                <div className="p-1">
                  <div className="overflow-hidden">
                    <Image
                      src={item.image.path}
                      alt="/"
                      width={item.image.width}
                      height={item.image.height}
                      className="aspect-[5/4] w-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        <div className="absolute left-0 bottom-40 flex gap-10 w-[200px]">
          <CarouselPrevious className="static rounded-none w-full translate-x-0 translate-y-0" />
          <CarouselNext className="static rounded-none w-full translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
