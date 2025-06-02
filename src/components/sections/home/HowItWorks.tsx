import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  H2Heading,
  H3Heading,
  Paragraph,
} from "@/components/ui/index";

const HowItWorks = () => {
  return (
    <section>
      <div className="grid w-full h-full grid-cols-1 md:grid-cols-1000">
        <div className="flex justify-end w-full py-24 pl-6 pr-6 bg-secondary-two text-secondary-two-foreground md:col-span-585 md:pr-21 md:pl-12">
          <div className="w-full max-w-[649px]">
            <H2Heading className="mb-6 font-medium">How It Works</H2Heading>
            <div>
              <Paragraph>
                Better Doctor handles everything from online evaluation to
                delivery of treatment and free ongoing care.
              </Paragraph>
            </div>
            <div className="mt-16">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1" className="py-4 border-t md:py-8">
                  <AccordionTrigger className="py-0">
                    <H3Heading className="text-xl md:text-3xl">
                      <span className="text-border">Step 1: </span>Online Visit
                    </H3Heading>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 p-0 pt-8 text-balance">
                    <p>
                      Easy online visit, reviewed by certified medical
                      professionals, designed to find the BETTER treatment
                      option for you.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button asChild className="w-full sm:w-auto">
                        <a href="#">Looking for Doctors?</a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="w-full sm:w-auto"
                      >
                        <a href="#">Explore Treatments?</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="py-4 border-t md:py-8">
                  <AccordionTrigger className="py-0">
                    <H3Heading className="text-xl md:text-3xl">
                      <span className="text-border">Step 2: </span>Fast Delivery
                    </H3Heading>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 p-0 pt-8 text-balance">
                    <p>
                      Fast delivery options available to ensure you receive your
                      treatment as quickly as possible.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button asChild className="w-full sm:w-auto">
                        <a href="#">Looking for Doctors?</a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="w-full sm:w-auto"
                      >
                        <a href="#">Explore Treatments?</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="py-4 border-t md:py-8">
                  <AccordionTrigger className="py-0">
                    <H3Heading className="text-xl md:text-3xl">
                      <span className="text-border">Step 3: </span>Ongoing Care
                    </H3Heading>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 p-0 pt-8 text-balance">
                    <p>
                      Ongoing online care and support from our medical team to
                      ensure you receive the best treatment possible.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button asChild className="w-full sm:w-auto">
                        <a href="#">Looking for Doctors?</a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="w-full sm:w-auto"
                      >
                        <a href="#">Explore Treatments?</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="py-4 border-t md:py-8">
                  <AccordionTrigger className="py-0">
                    <H3Heading className="text-xl md:text-3xl">
                      <span className="text-border">Step 4: </span>Fast Support
                    </H3Heading>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 p-0 pt-8 text-balance">
                    <p>
                      Ongoing online care and support from our medical team to
                      ensure you receive the best treatment possible.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button asChild className="w-full sm:w-auto">
                        <a href="#">Looking for Doctors?</a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="w-full sm:w-auto"
                      >
                        <a href="#">Explore Treatments?</a>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:col-span-415">
          <img
            src="/assets/home-how-it-works.png"
            alt="Doctor smiling with stethoscope around his neck"
            className="hidden object-cover w-full h-full md:block"
          />
          <img
            src="/assets/home-how-it-works-mobile.png"
            alt="Doctor smiling with stethoscope around his neck"
            className="object-cover w-full h-full md:hidden"
          />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
