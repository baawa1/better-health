import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
  Container,
  H3Heading,
  Paragraph,
} from "../../ui/index";

const HomeProducts = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col max-w-xl gap-4">
          <H3Heading>What are you trying to solve?</H3Heading>
          <div>
            <Paragraph>
              We have a solution for you. Our products are designed to address
              various challenges and enhance your experience. Whether you're
              looking for efficiency, convenience, or innovation, we have the
              right tools to help you achieve your goals.
            </Paragraph>
          </div>
          <Button asChild className="w-full sm:w-min">
            <a href="/products">See all treatments</a>
          </Button>
        </div>
        <div className="my-12">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Sexual <br /> Health
                  </p>
                  <img
                    src="/assets/product/sexual-health.png"
                    alt="Sexual Health"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Acne <br /> breakouts
                  </p>
                  <img
                    src="/assets/product/acne-breakouts.png"
                    alt="Acne breakouts"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Hair <br /> loss
                  </p>
                  <img
                    src="/assets/product/hair-loss.png"
                    alt="Hair loss"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Sexual <br /> Health 2
                  </p>
                  <img
                    src="/assets/product/sexual-health.png"
                    alt="Sexual Health 2"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Acne <br />
                    breakouts 2
                  </p>
                  <img
                    src="/assets/product/acne-breakouts.png"
                    alt="Acne breakouts 2"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Hair <br />
                    loss 2
                  </p>
                  <img
                    src="/assets/product/hair-loss.png"
                    alt="Hair loss 2"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Sexual <br /> Health 3
                  </p>
                  <img
                    src="/assets/product/sexual-health.png"
                    alt="Sexual Health 3"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Acne <br /> breakouts 3
                  </p>
                  <img
                    src="/assets/product/acne-breakouts.png"
                    alt="Acne breakouts 3"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-1/2 lg:basis-1/3">
                <div className="relative w-full bg-accent rounded-xl aspect-square">
                  <p className="absolute text-2xl font-semibold bottom-7 left-6 max-w-34">
                    Hair <br /> loss 3
                  </p>
                  <img
                    src="/assets/product/hair-loss.png"
                    alt="Hair loss 3"
                    className="w-full h-full "
                  />
                </div>
              </CarouselItem>
            </CarouselContent>

            <div className="absolute left-0 flex items-center justify-center gap-8 -bottom-13 lg:-top-15 lg:right-0 lg:left-auto lg:bottom-auto max-w-20">
              <CarouselPrevious className="relative top-0 bottom-0 left-0 right-0 border border-gray-950 size-6" />
              <CarouselNext className="relative top-0 bottom-0 left-0 right-0 border border-gray-950 size-6" />
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};
export default HomeProducts;
