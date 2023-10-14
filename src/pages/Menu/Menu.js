import React from "react";
import Hero from "./Hero/Hero";
import Search from "../../components/Search/Search";
import MenuItems from "./MenuItems/MenuItems";
import { motion } from "framer-motion";
const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Search />
      <MenuItems />
    </motion.div>
  );
};

export default Menu;
