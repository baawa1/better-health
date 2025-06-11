import CTA from "@/components/sections/home/CTA";
import Hero from "@/components/sections/home/Hero";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Products from "@/components/sections/home/Products";
import SuccessStories from "@/components/sections/home/SuccessStories";
import Wellness from "@/components/sections/home/Wellness";
import Why from "@/components/sections/home/Why";

const Home = () => {
  return (
    <>
      <Hero />
      <Why />
      <Products />
      <HowItWorks />
      <SuccessStories />
      <Wellness />
      <CTA />
    </>
  );
};
export default Home;
