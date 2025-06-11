import { Button, Container, Paragraph, Separator } from "../ui";
import {
  footerMenuItems,
  treatmentMenuItems,
  socialLinks,
  footerLinks,
} from "../../data/menuItems";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="py-12 pt-20 bg-secondary text-secondary-foreground/80">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-10">
          <div className="max-w-[320px] md:col-span-4">
            <Link to="/">
              <img src="/assets/logo-white.svg" alt="Better Doctor Logo" />
            </Link>
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
                      <Link to={item.path}>{item.label}</Link>
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
                      <Link to={item.path}>{item.label}</Link>
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
                  <Link
                    to="mailto:support@getbetterdoctor.com"
                    className="items-start px-0"
                  >
                    support@getbetterdoctor.com
                  </Link>
                </Button>
                <Button
                  variant={"link"}
                  asChild
                  className="items-start justify-start w-auto p-0 text-base text-primary-foreground hover:text-primary hover:no-underline size-auto"
                >
                  <Link to="tel:+1-800-123-4567" className="items-start px-0">
                    +1 (800) 123-4567
                  </Link>
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
                    <Link
                      to={link.path}
                      target="_blank"
                      className="items-start p-2 border rounded-full border-primary-foreground"
                    >
                      <span className="flex items-center justify-center gap-2 size-5">
                        {link.icon}
                      </span>
                    </Link>
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
                <Link to={link.path}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
