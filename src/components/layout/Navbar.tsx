import { Button } from "../ui/button";
import Container from "../ui/Container";

const menuItems = [
  { label: "Treatment", path: "/treatment" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-accent text-accent-foreground">
      <Container>
        <nav className="flex place-items-center w-full py-4">
          <div className="flex justify-start items-center">
            <a className="w-28" href="/">
              <span className="sr-only">Better Doctor</span>
              <img
                className=""
                src="/assets/logo.svg"
                alt="Better Doctor Logo"
              />
            </a>
          </div>
          <div className="pl-18 sm:pl-24 w-full flex gap-4">
            <div className="sm:justify-end md:justify-between flex justify-between items-center w-full">
              <div className="hidden md:flex">
                <ul className="flex flex-col md:flex-row gap-4">
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      <a href={item.path}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden sm:flex gap-4 place-items-center">
                <Button className="px-4" variant="ghost" asChild>
                  <a href="/login">Login</a>
                </Button>
                <Button asChild>
                  <a href="/sign-up">Sign Up</a>
                </Button>
              </div>
            </div>
            <div className="bg-primary p-1.5 rounded-[8px] md:hidden">
              <img src="mobile-nav-icon.svg" alt="mobile nav icon" />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
export default Navbar;
