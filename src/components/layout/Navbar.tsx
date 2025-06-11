import {
  Button,
  Container,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/index";
import { menuItems, treatmentMenuItems } from "../../data/menuItems.js";
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
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col gap-4 md:flex-row">
                    {menuItems.map((item, index) => {
                      if (item.label === "Treatments") {
                        return (
                          <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger className="text-base bg-transparent p-0">
                              {item.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <NavLink
                                to="/treatments"
                                className="row-span-3 h-full rounded-[8px] p-4 flex flex-col justify-center items-start gap-3 bg-muted hover:bg-blue-200 transition-colors"
                              >
                                <p className="text-xl font-bold">
                                  All Treatments
                                </p>
                                <p>View all our treatments in one place</p>
                              </NavLink>

                              <ul className="flex flex-col gap-2 min-w-max py-2">
                                {treatmentMenuItems.map((treatment) => (
                                  <li key={treatment.label}>
                                    <NavigationMenuLink asChild>
                                      <Button
                                        variant="ghost"
                                        className="font-normal text-base px-6 py-2 hover:text-primary hover:bg-transparent"
                                      >
                                        <NavLink
                                          to={treatment.path}
                                          className="text-base font-medium"
                                        >
                                          {treatment.label}
                                        </NavLink>
                                      </Button>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        );
                      } else {
                        return (
                          <>
                            <NavigationMenuItem key={index}>
                              <NavigationMenuLink asChild>
                                <Button
                                  variant="ghost"
                                  className="font-normal text-base p-0 hover:text-primary hover:bg-transparent"
                                >
                                  <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                      isActive
                                        ? "text-primary pointer-events-none"
                                        : ""
                                    }
                                    end
                                  >
                                    {item.label}
                                  </NavLink>
                                </Button>
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          </>
                        );
                      }
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
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
