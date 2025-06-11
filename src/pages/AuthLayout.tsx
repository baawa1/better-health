import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default AuthLayout;
