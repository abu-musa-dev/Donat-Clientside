import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar"; 
import Banner from "../components/Banner/Banner";
import RunningCampaigns from "../components/RunningCampaigns/RunningCampaigns";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import CharityServices from "../components/CharityServices/CharityServices";
import CharityHero from "../components/CharityHero/CharityHero";
import Stats from "../components/Stats/Stats";
import CallToAction from "../components/CallToAction/CallToAction";
import FAQSection from "../components/FAQSection/FAQSection";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("homeTheme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      const theme = newMode ? "dark" : "light";
      localStorage.setItem("homeTheme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      return newMode;
    });
  };

  return (
    <div className={`home ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />
      <Banner  />
      <RunningCampaigns />
      <CharityHero></CharityHero>
      <CharityServices ></CharityServices>
      <Stats></Stats>
      <CallToAction></CallToAction>
      <SuccessStories isDarkMode={isDarkMode} />
      <Testimonial></Testimonial>
      <FAQSection></FAQSection>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
