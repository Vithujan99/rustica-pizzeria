import React from "react";
import Hero from "./Hero/Hero";
import MenuContent from "./MenuContent/MenuContent";
import RentContent from "./RentContent/RentContent";
import AboutUs from "./AboutUs/AboutUs";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <MenuContent />
      <RentContent />
      <AboutUs />
    </motion.div>
  );
};

export default Home;
