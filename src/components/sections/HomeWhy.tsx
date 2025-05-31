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
import Container from "../ui/Container";
import H2Heading from "../ui/h2";
import H3Heading from "../ui/h3";
import Paragraph from "../ui/paragraph";

const HomeWhy = () => {
  return (
    <section className="py-24">
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
        <div className="grid grid-cols-1 gap-6 md:gap-y-14 md:gap-x-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-none gap-3">
            <CardHeader className="px-0">
              <CardTitle className="flex flex-col gap-6">
                <div className="size-8">
                  <img
                    src="assets/search-icon.svg"
                    alt="search icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <H3Heading>Easy to use online visit</H3Heading>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 ">
              <Paragraph className="max-w-sm">
                Our platform is designed to be user-friendly, making it easy for
                you to access healthcare services from the comfort of your home.
              </Paragraph>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-none gap-3">
            <CardHeader className="px-0">
              <CardTitle className="flex flex-col gap-6">
                <div className="size-8">
                  <img
                    src="assets/empathize-line.svg"
                    alt="empathize line icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <H3Heading>Certified Medical Professionals</H3Heading>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 ">
              <Paragraph className="max-w-sm">
                Our team consists of certified medical professionals who are
                dedicated to providing you with the best possible care and
                support.
              </Paragraph>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-none gap-3">
            <CardHeader className="px-0">
              <CardTitle className="flex flex-col gap-6">
                <div className="size-8">
                  <img
                    src="assets/hearts-line.svg"
                    alt="hearts line icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <H3Heading>Control Your Well Being</H3Heading>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 ">
              <Paragraph className="max-w-sm">
                Our platform empowers you to take charge of your health and
                well-being, providing you with the tools and resources you need
                to make informed decisions.
              </Paragraph>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-none gap-3">
            <CardHeader className="px-0">
              <CardTitle className="flex flex-col gap-6">
                <div className="size-8">
                  <img
                    src="assets/capsule-fill.svg"
                    alt="capsule fill icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <H3Heading>Personalized Treatments</H3Heading>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 ">
              <Paragraph className="max-w-sm">
                We offer personalized treatment plans tailored to your unique
                health needs, ensuring that you receive the best possible care.
              </Paragraph>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-none gap-3">
            <CardHeader className="px-0">
              <CardTitle className="flex flex-col gap-6">
                <div className="size-8">
                  <img
                    src="assets/award-line.svg"
                    alt="Award line icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <H3Heading>Secure and Confidential HIPAA Compliant</H3Heading>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 ">
              <Paragraph className="max-w-sm">
                We prioritize your privacy and security, ensuring that all
                interactions on our platform are HIPAA compliant and
                confidential.
              </Paragraph>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-none gap-3">
            <CardHeader className="px-0">
              <CardTitle className="flex flex-col gap-6">
                <div className="size-8">
                  <img
                    src="assets/24-hours-line.svg"
                    alt="24 hours icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <H3Heading>24/7 Access</H3Heading>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 ">
              <Paragraph className="max-w-sm">
                Our telemedicine platform is available 24/7, allowing you to
                access healthcare services whenever you need them, without any
                delays.
              </Paragraph>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};
export default HomeWhy;
