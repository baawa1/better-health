import Navbar from "@/components/layout/Navbar";
import HomeHero from "@/components/sections/HomeHero";
import HomeWhy from "@/components/sections/HomeWhy";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <HomeHero />
          <HomeWhy />
        </main>
      </div>
    </>
  );
};
export default Home;
