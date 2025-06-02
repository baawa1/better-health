import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/Hero";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Products from "@/components/sections/home/Products";
import Why from "@/components/sections/home/Why";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Hero />
          <Why />
          <Products />
          <HowItWorks />
        </main>
      </div>
    </>
  );
};
export default Home;
