import { Button, Container, Paragraph, Separator } from "../ui";
import {
  footerMenuItems,
  treatmentMenuItems,
  socialLinks,
  footerLinks,
} from "../../data/menuItems";

const Footer = () => {
  return (
    <footer className="py-12 pt-20 bg-secondary text-secondary-foreground/80">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-10">
          <div className="max-w-[320px] md:col-span-4">
            <div>
              <img src="/assets/logo-white.svg" alt="Better Doctor Logo" />
            </div>
            <Paragraph className="text-base">
              Medicine and Lab Tests Prescribed Online Delivered to your Door.
              <br />
              <br />
              No Hassle. No Waiting Rooms.No Appointments.
            </Paragraph>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <p className="text-sm opacity-65">Company</p>
              <ul>
                {footerMenuItems.map((item) => (
                  <li key={item.label}>
                    <Button
                      variant="link"
                      asChild
                      className="p-0 text-base text-primary-foreground hover:text-primary hover:no-underline"
                    >
                      <a href={item.path}>{item.label}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm opacity-65">Company</p>
              <ul>
                {treatmentMenuItems.map((item) => (
                  <li key={item.label}>
                    <Button
                      variant="link"
                      asChild
                      className="p-0 text-base text-primary-foreground hover:text-primary hover:no-underline"
                    >
                      <a href={item.path}>{item.label}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm opacity-65">Contact</p>
              <Paragraph>
                2232 Dell Range BlvdSuite 242 # 5008Cheyenne, WY 82009United
                States
              </Paragraph>
              <div>
                <Button
                  variant={"link"}
                  asChild
                  className="items-start justify-start w-auto p-0 text-base text-primary-foreground hover:text-primary hover:no-underline size-auto"
                >
                  <a
                    href="mailto:support@getbetterdoctor.com"
                    className="items-start px-0"
                  >
                    support@getbetterdoctor.com
                  </a>
                </Button>
                <Button
                  variant={"link"}
                  asChild
                  className="items-start justify-start w-auto p-0 text-base text-primary-foreground hover:text-primary hover:no-underline size-auto"
                >
                  <a href="tel:+1-800-123-4567" className="items-start px-0">
                    +1 (800) 123-4567
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant={"link"}
                    asChild
                    className="items-start justify-start w-auto p-0 text-base text-primary-foreground hover:text-primary hover:no-underline size-auto"
                  >
                    <a
                      href={link.path}
                      className="items-start p-2 border rounded-full border-primary-foreground"
                    >
                      <span className="flex items-center justify-center gap-2 size-5">
                        {link.icon}
                      </span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Separator className="mt-16 bg-primary/40" />
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 md:flex-row">
          <Paragraph className="">
            &copy; {new Date().getFullYear()} Better Doctor LLC. All rights
            reserved.
          </Paragraph>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {footerLinks.map((link) => (
              <Button
                key={link.label}
                variant="link"
                asChild
                className="p-0 text-base text-primary-foreground hover:text-primary hover:no-underline"
              >
                <a href={link.path}>{link.label}</a>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
