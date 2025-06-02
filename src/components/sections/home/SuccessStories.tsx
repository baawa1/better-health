import { div } from "motion/react-client";
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
  H2Heading,
  Paragraph,
  CardHeader,
  CardTitle,
  CardFooter,
  H3Heading,
} from "../../ui/index";
import { testimonials } from "@/data/testimonials";

const SuccessStories = () => {
  return (
    <section className="pt-10 md:pt-24">
      <Container>
        <div className="flex flex-col max-w-2xl gap-4 mb-25 md:mb-0">
          <H2Heading>
            <span className="text-primary">Success stories</span> from our
            patients
          </H2Heading>
          <div>
            <Paragraph>
              Every Journey Matters. Explore stories of transformation and care,
              woven from threads of resilience, courage, and the unwavering
              support of our dedicated team.
            </Paragraph>
            <Paragraph>
              Here, you'll encounter individuals who embarked on unique paths
              toward better health, empowered by personalized care and a
              commitment to well-being.
            </Paragraph>
          </div>
        </div>
        <div className="my-12">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                return (
                  <CarouselItem
                    className="sm:basis-1/2 lg:basis-1/3 "
                    key={index}
                  >
                    <Card className="gap-3 p-8 border-0 bg-accent">
                      <CardHeader className="px-0">
                        <CardTitle>
                          <H3Heading>{testimonial.title}</H3Heading>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-0">
                        <Paragraph>“{testimonial.testimonial}”</Paragraph>
                      </CardContent>
                      <CardFooter className="p-0 pt-4 pt-8 md:t-20">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center justify-center gap-2 md:gap-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="object-cover rounded-full size-8 md:size-12"
                            />
                            <p className="md:text-2xl">{testimonial.name}</p>
                          </div>
                          <div className="flex items-center justify-center size-12 md:size-20">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 80 80"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.5">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M50.2666 18.352C53.632 17.264 57.5146 17.2853 60.688 18.912C68.016 22.6773 71.1893 32.384 68.24 42.6667C66.9173 47.28 64.5866 51.76 59.6586 56.2773C54.7306 60.8 47.8933 63.4666 44.7253 63.4666C44.4587 63.4709 44.1939 63.4225 43.946 63.3242C43.6982 63.2259 43.4722 63.0797 43.2809 62.8939C43.0897 62.7081 42.937 62.4864 42.8316 62.2415C42.7261 61.9966 42.6701 61.7333 42.6666 61.4666C42.6666 60.3626 43.6053 59.4667 44.7253 59.4667C48.3466 59.4667 51.584 57.4933 55.4186 54.592C58.352 52.368 60.6453 49.5253 61.9093 47.0507C64.336 42.3147 64.416 35.6373 60.496 33.8613C59.5859 34.8943 58.4643 35.7194 57.2073 36.2807C55.9503 36.842 54.5872 37.1264 53.2106 37.1147C46.8106 37.1147 43.04 31.968 43.2053 27.3066C43.36 22.8533 46.192 19.68 50.2666 18.352ZM18.2666 18.352C21.632 17.264 25.5146 17.2853 28.688 18.912C36.016 22.6773 39.1893 32.384 36.24 42.6667C34.9173 47.28 32.5866 51.76 27.6586 56.2773C22.7306 60.8 15.8933 63.4666 12.7253 63.4666C12.4587 63.4709 12.1939 63.4225 11.946 63.3242C11.6982 63.2259 11.4722 63.0797 11.2809 62.8939C11.0897 62.7081 10.937 62.4864 10.8316 62.2415C10.7261 61.9966 10.6701 61.7333 10.6666 61.4666C10.6666 60.3626 11.6053 59.4667 12.7253 59.4667C16.3466 59.4667 19.584 57.4933 23.4186 54.592C26.352 52.368 28.6453 49.5253 29.9093 47.0507C32.336 42.3147 32.416 35.6373 28.496 33.8613C26.6133 35.92 24.1546 37.1147 21.2106 37.1147C14.8106 37.1147 11.04 31.968 11.2053 27.3066C11.36 22.8533 14.192 19.68 18.2666 18.352Z"
                                  fill="#BFE7FB"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="absolute left-0 right-0 bottom-auto flex items-center justify-center gap-8 md:left-auto md:right-0 -top-15 max-w-20">
              <CarouselPrevious className="relative top-0 bottom-0 left-0 right-0 border border-gray-950 size-6" />
              <CarouselNext className="relative top-0 bottom-0 left-0 right-0 border border-gray-950 size-6" />
            </div>
          </Carousel>
        </div>
        <div>
          <Button asChild className="w-full sm:w-min">
            <a href="#">See all Reviews</a>
          </Button>
        </div>
      </Container>
    </section>
  );
};
export default SuccessStories;
