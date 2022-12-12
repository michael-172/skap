import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

export const pageMotion = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  exit: {
    opacity: 0,
    x: 0,
    transition: { ease: "easeIn", duration: 0.2 },
  },
};

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/Services/:id" element={<Services />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Client/:id" element={<Clients />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blogs/:id" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
};
