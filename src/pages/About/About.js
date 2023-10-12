import React from "react";
import { motion } from "framer-motion";
import "./About.css";
const About = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <div className="about-page-öz">
        <h1 className="about-page-öz-titel">ÖffnungsZeiten</h1>
        <motion.div
          className="about-page-öz-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="about-page-öz-card" variants={item}>
            <div className="about-page-öz-card-day">Montag - Dienstag</div>
            <div>17:30-22:30</div>
          </motion.div>
          <motion.div className="about-page-öz-card" variants={item}>
            <div className="about-page-öz-card-day">Mittwoch - Donnerstag</div>
            <div>11:30-14:30</div>
            und
            <div>17:30 - 22:30</div>
          </motion.div>
          <motion.div className="about-page-öz-card" variants={item}>
            <div className="about-page-öz-card-day">Freitag</div>
            <div>11:30-14:30</div> und
            <div>17:30 - 23:00</div>
          </motion.div>
          <motion.div className="about-page-öz-card" variants={item}>
            <div className="about-page-öz-card-day">Samstag</div>
            <div>17:00-23:00</div>
          </motion.div>
          <motion.div className="about-page-öz-card" variants={item}>
            <div className="about-page-öz-card-day">Sonntag / Feiertags</div>
            <div>17:00-22:30</div>
          </motion.div>
        </motion.div>
        <div className="about-page-adresse-section">
          <div className="about-page-adresse-card">
            <h1 className="about-page-a-titel">Adresse</h1>
            <address className="about-page-a">
              <span className="about-page-a-street">Meerkamp 111</span>
              <span className="about-page-a-city"> 41238 Mönchengladbach</span>
              <a className="about-page-a-tel" href="tel:+49216688844">
                02166 <span>888444</span>
              </a>
            </address>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
