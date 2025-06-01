import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card";
import Container from "../ui/container";
import H2Heading from "../ui/h2";
import H3Heading from "../ui/h3";
import Paragraph from "../ui/paragraph";
import { homeCardContent } from "../../data/homeCardContent.js";

const HomeWhy = () => {
  return (
    <section className="pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative w-full h-full">
            <img
              src="assets/better-why-img.png"
              alt="better why card image"
              className="w-full h-full object-cover rounded-4xl block md:hidden aspect-[0.78]"
            />
            <img
              src="assets/better-why-img-desktop.png"
              alt="better why card image"
              className="w-full h-full object-cover rounded-4xl hidden md:block"
            />
          </div>
          <div>
            <Card className="w-full h-full px-4 py-8">
              <CardHeader>
                <CardTitle>
                  <H2Heading>Why Better Doctor?</H2Heading>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Paragraph>
                  We deliver a BETTER tomorrow through our innovative 24/7
                  telemedicine platform enabled by cutting edge certified
                  pharmacies, certified medical professionals and lab partners.
                </Paragraph>
              </CardContent>
              <CardFooter className="pt-4">
                <Button asChild className="w-full md:w-auto">
                  <a href="/" className="inline-block">
                    Explore treatments
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        {/*
          Extract card data into an array and map over it to render cards.
        */}

        <div className="grid grid-cols-1 gap-6 md:gap-y-14 md:gap-x-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {homeCardContent.map((item, idx) => (
            <Card key={idx} className="border-0 shadow-none gap-3">
              <CardHeader className="px-0">
                <CardTitle className="flex flex-col gap-6">
                  <div className="size-8">
                    <img
                      src={item.icon}
                      alt={item.iconAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <H3Heading>{item.title}</H3Heading>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 ">
                <Paragraph className="max-w-sm">{item.description}</Paragraph>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default HomeWhy;
