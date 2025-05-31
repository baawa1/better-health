import { Button } from "../ui/button";
import Container from "../ui/Container";
import H1Heading from "../ui/h1";
import Paragraph from "../ui/paragraph";

const HomeHero = () => {
  return (
    <section className="relative bg-secondary text-secondary-foreground lg:aspect-[1.77] flex flex-col place-items-center w-full lg:max-h-[55rem]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 w-full">
          <div className="relative z-2 col-span-1 lg:col-span-6 lg:pl-20 lg:pr-12 py-10 lg:py-28 flex flex-col gap-6 max-w-xl items-start">
            <H1Heading className="font-bold">
              Take control of your healthcare needs
            </H1Heading>
            <Paragraph>
              Tired of waiting rooms and appointments? Get expert care from
              certified doctors online, delivered discreetly to your door. Skip
              the hassle, not the expertise.
            </Paragraph>
            <Paragraph>
              We connect you with licensed professionals who prescribe the meds
              you need, based on a quick, secure consultation. Take charge of
              your health, simply and safely, with real doctors, online at last.
              Start your journey today!
            </Paragraph>
            <Button asChild>
              <a href="/get-started" className="inline-block">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </Container>
      <img
        className="w-full h-auto object-cover lg:hidden "
        src="/assets/home-hero-image-mobile.png"
        alt="A woman sitting with a cup of coffee and smiling"
      />
      <div className="absolute size-28 md:size-32 lg:size-40 lg:-left-20 lg:bottom-32 -bottom-14">
        {/* This is the badge that appears on the bottom side of the hero section on mobile */}
        <img
          src="/assets/home-hero-badge.svg"
          alt="Live a better live badge"
          className="w-full h-full object-contain lg:hidden"
        />
      </div>
      <img
        src="/assets/home-hero-semicircle-mobile.svg"
        alt="Home hero semi circle"
        className="absolute -bottom-15 right-0 size-52 lg:hidden"
      />
      <div className="absolute top-0 right-0 object-cover aspect-[0.74] z-1 h-full hidden lg:block">
        <img
          className="w-full h-auto object-cover"
          src="/assets/home-hero-image.png"
          alt="A woman sitting with a cup of coffee and smiling"
        />
        {/* This is the badge that appears on the bottom side of the hero section on desktop */}
        <div className="absolute size-28 md:size-32 lg:size-40 lg:-left-20 lg:bottom-32 -bottom-14">
          <img
            src="/assets/home-hero-badge.svg"
            alt="Live a better live badge"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* // This is the semi-circle that appears on the bottom side of the hero section on desktop*/}
      <img
        src="/assets/home-hero-semicircle.svg"
        alt="Home hero semi circle"
        className="hidden lg:block absolute -bottom-12 right-0 z-3"
      />
    </section>
  );
};
export default HomeHero;
