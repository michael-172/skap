import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import App_Navbar from "../Components/App_Navbar";
import Services from "../Components/Services";
import Landing from "../Components/Landing";
import About from "../Components/About";
import Clients from "../Components/Clients";
import Work from "../Components/Work.jsx";
import { pageMotion } from "../AnimatedRoutes";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="Home">
      <App_Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <Landing />
        <About />
        <Services />
        <Clients />
        <Work />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
