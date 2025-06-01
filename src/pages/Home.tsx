import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/sections/HomeHero";
import HomeProducts from "@/components/sections/HomeProducts";
import HomeWhy from "@/components/sections/HomeWhy";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <HomeHero />
          <HomeWhy />
          <HomeProducts />
        </main>
      </div>
    </>
  );
};
export default Home;
