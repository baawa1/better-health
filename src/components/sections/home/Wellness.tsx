import {
  Button,
  Card,
  CardFooter,
  Container,
  H2Heading,
  H3Heading,
  Paragraph,
} from "@/components/ui";

const Wellness = () => {
  return (
    <section className="py-8 md:py-24">
      <Container>
        <div className="flex flex-col max-w-2xl gap-4 mb-10 md:mb-16">
          <H2Heading>Wellness for everyone</H2Heading>
          <div>
            <Paragraph>
              Discover in greater detail how Get Better Doctor can be of
              assistance to individuals of all genders and age groups.
            </Paragraph>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="relative flex flex-col items-start justify-end px-4 py-8 border-0 aspect-square md:px-8 md:py-12 text-primary-foreground">
            <img
              src="assets/better-for-him.png"
              alt="Better for him image, a man using drugs"
              className="absolute top-0 left-0 z-0 object-cover w-full h-full rounded-2xl"
            />
            <CardFooter className="flex flex-col items-start w-full gap-4 px-0 z-1">
              <H3Heading>Better for Him</H3Heading>
              <Button asChild>
                <a href="#">Explore Options</a>
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative flex flex-col items-start justify-end px-4 py-8 border-0 aspect-square md:px-8 md:py-12 text-primary-foreground">
            <img
              src="assets/better-for-her.png"
              alt="Better for her image, a woman smilling and using drugs"
              className="absolute top-0 left-0 z-0 object-cover w-full h-full rounded-2xl"
            />
            <CardFooter className="flex flex-col items-start w-full gap-4 px-0 z-1">
              <H3Heading>Better for Her</H3Heading>
              <Button asChild>
                <a href="#">Explore Options</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </section>
  );
};
export default Wellness;
