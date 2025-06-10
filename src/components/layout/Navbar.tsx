import { Button } from "../ui/index";
import { Container } from "../ui/index";
import { menuItems } from "../../data/menuItems.js";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-accent text-accent-foreground">
      <Container className="py-0">
        <nav className="flex w-full py-4 place-items-center">
          <div className="flex items-center justify-start">
            <NavLink to="/" className="w-28">
              <span className="sr-only">Better Doctor</span>
              <img
                className=""
                src="/assets/logo.svg"
                alt="Better Doctor Logo"
              />
            </NavLink>
          </div>
          <div className="flex items-center w-full gap-4 pl-18 sm:pl-24">
            <div className="flex items-center justify-between w-full sm:justify-end md:justify-between">
              <div className="hidden md:flex">
                <ul className="flex flex-col gap-4 md:flex-row">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant={"ghost"}
                        className="font-normal p-0 hover:text-primary hover:bg-transparent"
                      >
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            isActive ? "text-primary pointer-events-none" : ""
                          }
                          end
                        >
                          {item.label}
                        </NavLink>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden gap-4 sm:flex place-items-center">
                <Button className="px-4" variant="ghost" asChild>
                  <NavLink to="/login">Login</NavLink>
                </Button>
                <Button asChild className="font-normal">
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </Button>
              </div>
            </div>
            <div className="bg-primary p-1.5 rounded-[8px] md:hidden flex items-center justify-center size-10 shrink-0">
              <img src="mobile-nav-icon.svg" alt="mobile nav icon" />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
export default Navbar;
