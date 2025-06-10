import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Treatment from "./pages/Treatment";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/treatment" element={<Treatment />}>
            <Route index element={<Treatment />} />
            <Route path=":treatmentId" element={<Treatment />} />
          </Route>
          {/* <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
