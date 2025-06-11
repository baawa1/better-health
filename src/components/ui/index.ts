// This file is part of the UI library for the application.
// It exports various UI components such as buttons, cards, carousels, and headings.
import { Button, buttonVariants } from "./button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./card";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";
import Container from "./container";
import H1Heading from "./h1";
import H2Heading from "./h2";
import H3Heading from "./h3";
import Paragraph from "./paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Separator } from "./separator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./navigation-menu";

//
//
//
//
//
//
// Exporting components from the UI library
// This file serves as a central export point for all UI components,
// allowing for easier imports in other parts of the application.
export { Button, buttonVariants };
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
};
export { Container };
export { H1Heading };
export { H2Heading };
export { H3Heading };
export { Paragraph };
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
export { Separator };
export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
