import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
export default function ListData() {
  return (
    <div className="w-full flex justify-center items-center h-screen p-10">
      <Carousel
        opts={{
          // loop: true,
          align: "center",
        }}
        className="w-4/5 mt-10"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center hover:scale-125 transition ease-in-out duration-300">
                    <img
                      src={`https://picsum.photos/200?random=${index}`}
                      alt="pic"
                      className="w-full h-40 object-cover"
                    />
                  </CardContent>
                </Card>
                <div className="bg-slate-500 w-1/4">
                  <p className="text-center text-white">Free</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
