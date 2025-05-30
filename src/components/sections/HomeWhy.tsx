import { Button } from "../ui/button";
import Container from "../ui/Container";
import Paragraph from "../ui/paragraph";

const HomeWhy = () => {
  return (
    <section>
      <Container>
        <div>
          <div></div>
          <div>
            <Paragraph>
              We deliver a BETTER tomorrow through our innovative 24/7
              telemedicine platform enabled by cutting edge certified
              pharmacies, certified medical professionals and lab partners.
            </Paragraph>
            <Button asChild>
              <a href="/get-started" className="inline-block">
                Explore treatments
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HomeWhy;
