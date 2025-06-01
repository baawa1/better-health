import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Container from "../ui/container";
import H3Heading from "../ui/h2";
import Paragraph from "../ui/paragraph";

const HomeProducts = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4">
          <H3Heading>What are you trying to solve?</H3Heading>
          <div>
            <Paragraph>
              We have a solution for you. Our products are designed to address
              various challenges and enhance your experience. Whether you're
              looking for efficiency, convenience, or innovation, we have the
              right tools to help you achieve your goals.
            </Paragraph>
          </div>
          <Button asChild className="w-full">
            <a href="/products">Get Started</a>
          </Button>
        </div>
        <div className="my-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              <CarouselItem className="basis-1/3">1</CarouselItem>
              <CarouselItem className="basis-1/3">2</CarouselItem>
              <CarouselItem className="basis-1/3">3</CarouselItem>
              <CarouselItem className="basis-1/3">4</CarouselItem>
              <CarouselItem className="basis-1/3">5</CarouselItem>
              <CarouselItem className="basis-1/3">6</CarouselItem>
              <CarouselItem className="basis-1/3">7</CarouselItem>
              <CarouselItem className="basis-1/3">8</CarouselItem>
              <CarouselItem className="basis-1/3">9</CarouselItem>
              <CarouselItem className="basis-1/3">10</CarouselItem>
              <CarouselItem className="basis-1/3">11</CarouselItem>
            </CarouselContent>

            <div className="absolute bottom-0 left-0 md:top-10 md:right-0 flex gap-8 justify-center items-center max-w-20">
              <CarouselPrevious className="border border-gray-950 size-6 relative top-0 bottom-0 right-0 left-0" />
              <CarouselNext className="border border-gray-950 size-6 relative top-0 bottom-0 right-0 left-0" />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};
export default HomeProducts;
