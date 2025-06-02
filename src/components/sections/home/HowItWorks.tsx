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
      <div className="grid grid-cols-1 md:grid-cols-1000 w-full h-full">
        <div className="bg-secondary-two text-secondary-two-foreground flex justify-end w-full md:col-span-585 py-24 pr-6 md:pr-21 pl-6 md:pl-12">
          <div className="w-full max-w-[649px]">
            <H2Heading className="font-medium mb-6">How It Works</H2Heading>
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
                <AccordionItem value="item-1" className="border-t py-4 md:py-8">
                  <AccordionTrigger className="py-0">
                    <H3Heading className="text-xl md:text-3xl">
                      <span className="text-border">Step 1: </span>Online Visit
                    </H3Heading>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance p-0 pt-8">
                    <p>
                      Easy online visit, reviewed by certified medical
                      professionals, designed to find the BETTER treatment
                      option for you.
                    </p>
                    <div className="flex gap-4 pt-4 flex-wrap">
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
                <AccordionItem value="item-2" className="border-t py-4 md:py-8">
                  <AccordionTrigger className="py-0">
                    <H3Heading className="text-xl md:text-3xl">
                      <span className="text-border">Step 2: </span>Fast Delivery
                    </H3Heading>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance p-0 pt-8">
                    <p>
                      Fast delivery options available to ensure you receive your
                      treatment as quickly as possible.
                    </p>
                    <div className="flex gap-4 pt-4 flex-wrap">
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
                <AccordionItem value="item-3" className="border-t py-4 md:py-8">
                  <AccordionTrigger className="py-0">
                    <H3Heading className="text-xl md:text-3xl">
                      <span className="text-border">Step 3: </span>Ongoing Care
                    </H3Heading>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance p-0 pt-8">
                    <p>
                      Ongoing online care and support from our medical team to
                      ensure you receive the best treatment possible.
                    </p>
                    <div className="flex gap-4 pt-4 flex-wrap">
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
                <AccordionItem value="item-4" className="border-t py-4 md:py-8">
                  <AccordionTrigger className="py-0">
                    <H3Heading className="text-xl md:text-3xl">
                      <span className="text-border">Step 4: </span>Fast Support
                    </H3Heading>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance p-0 pt-8">
                    <p>
                      Ongoing online care and support from our medical team to
                      ensure you receive the best treatment possible.
                    </p>
                    <div className="flex gap-4 pt-4 flex-wrap">
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
            className="w-full h-full object-cover hidden md:block"
          />
          <img
            src="/assets/home-how-it-works-mobile.png"
            alt="Doctor smiling with stethoscope around his neck"
            className="w-full h-full object-cover md:hidden"
          />
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
