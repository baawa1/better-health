import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AuthLayout from "./pages/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Treatments from "./pages/Treatments";
import Treatment from "./pages/Treatment";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/treatments">
              <Route index element={<Treatments />} />
              <Route path=":treatmentId" element={<Treatment />} />
            </Route>
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
