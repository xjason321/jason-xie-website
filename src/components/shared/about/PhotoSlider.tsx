import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Photo {
  title: string;
  imagePath: string;
  author: string;
}

import Autoplay from "embla-carousel-autoplay"

export const images: Photo[] = [
  {
      title: "Picture with friends in Madison :D", imagePath: "friends.jpg",
      author: "Josh Chien"
  },
  {
      title: "Beach photo at Point Dune", imagePath: "beach.jpg",
      author: ""
  },
  {
      title: "Picture with the fam c:", imagePath: "fam.jpg",
      author: ""
  },
  {
      title: "A cool sunset on Lake Mendota", imagePath: "sunset.jpg",
      author: ""
  },
  {
      title: "Look at these snowflakes", imagePath: "snow.jpg",
      author: ""
  },
  {
      title: "My idol, Mr. Buckingham Badger", imagePath: "badger.jpg",
      author: ""
  },
  {
      title: "A picture of the capitol", imagePath: "madison.jpg",
      author: ""
  },
];

const PhotoSlider: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        })
      ]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-5">
            <Card className="h-full bg-zinc-900">
              <CardContent className="flex flex-col items-center justify-between p-4">
                <figure className="w-full h-full flex flex-col items-center">
                  <div className="overflow-hidden rounded-md w-full h-[400px]">
                    <img
                      src={`/jason-xie-website/assets/about/${image.imagePath}`}
                      alt={image.title}
                      title={image.title}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <figcaption className="pt-4 text-sm text-center text-white">
                    <p>{image.title}</p>
                  </figcaption>
                </figure>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PhotoSlider;
