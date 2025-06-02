import { Button, H1Heading, Paragraph } from "../../ui/index";

const Hero = () => {
  return (
    <section className="flex flex-col w-full md:flex-row">
      <div className="flex items-center w-full md:max-w-[60vw] justify-end bg-secondary text-secondary-foreground pr-20 md:pr-30 pl-6 md:pl-8">
        <div className="w-full max-w-[574px] md:my-28 my-15">
          <div className="relative flex flex-col items-start max-w-xl col-span-1 gap-8 z-2">
            <H1Heading className="font-normal">
              Take control of your healthcare needs
            </H1Heading>
            <div className="max-w-[513px]">
              <Paragraph>
                Tired of waiting rooms and appointments? Get expert care from
                certified doctors online, delivered discreetly to your door.
                Skip the hassle, not the expertise.
              </Paragraph>
              <Paragraph>
                We connect you with licensed professionals who prescribe the
                meds you need, based on a quick, secure consultation. Take
                charge of your health, simply and safely, with real doctors,
                online at last. Start your journey today!
              </Paragraph>
            </div>
            <Button asChild>
              <a href="/get-started" className="inline-block">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-fullmax-w-[40vw] relative">
        <div className="relative w-full h-full md:hidden">
          <img
            className="object-cover w-full h-auto"
            src="/assets/home-hero-image-mobile.png"
            alt="A woman sitting with a cup of coffee and smiling"
          />
          <div className="absolute size-28 left-[calc(50%-3.5rem)] -bottom-14">
            <img
              src="/assets/home-hero-badge.svg"
              alt="Live a better live badge"
              className="object-contain w-full h-full"
            />
          </div>
          <img
            src="/assets/home-hero-semicircle-mobile.svg"
            alt="Home hero semi circle"
            className="absolute right-0 -bottom-15 size-52"
          />
        </div>
        {/* This is the desktop image container */}
        <div className="hidden w-full h-full md:block">
          <img
            className="object-cover w-full h-full"
            src="/assets/home-hero-image.png"
            alt="A woman sitting with a cup of coffee and smiling"
          />
          <div className="absolute size-28 md:size-32 lg:size-40 lg:-left-20 lg:bottom-32 bottom-14 -left-16">
            <img
              src="/assets/home-hero-badge.svg"
              alt="Live a better live badge"
              className="object-contain w-full h-full"
            />
          </div>
          <img
            src="/assets/home-hero-semicircle.svg"
            alt="Home hero semi circle"
            className="absolute right-0 -bottom-16 z-3"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
