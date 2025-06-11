import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
