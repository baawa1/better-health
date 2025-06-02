import { Button, Container } from "@/components/ui";

const CTA = () => {
  return (
    <section className="bg-primary text-primary-foreground md:pt-14">
      <Container className="px-0 py-0 md:px-8">
        <div className="grid w-full grid-cols-1 text-center md:grid-cols-2 gap-b-14 md:text-left">
          <div
            className="flex flex-col not-first:gap-6 gap-8 py-24 md:max-w-[400px] items-center md:items-start w-full px-6 md:px-0
          "
          >
            <h2 className="text-3xl font-bold">
              Ready to start
              <br /> your BETTER tomorow?
            </h2>
            <p className="max-w-[4000px]">
              Join thousands of satisfied customers who have transformed their
              health with our expert care. Don't wait any longer, start your
              journey today!
            </p>
            <Button
              asChild
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 md:w-auto"
            >
              <a href="#">Get Started</a>
            </Button>
          </div>
          <div className="w-full md:self-end md:max-w-lg">
            <img
              src="/assets/cta-image.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default CTA;
