// src/Pages/Home.jsx
import React, { useContext } from "react";
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
import { ThemeContext } from "../contexts/ThemeContext"; // ThemeContext ইম্পোর্ট করা

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // ThemeContext থেকে থিম এবং toggleTheme নেয়া

  return (
    <div className={`home ${theme === "dark" ? "dark-mode" : ""}`}>
      <Navbar isDarkMode={theme === "dark"} onThemeToggle={toggleTheme} />
      <Banner />
      <RunningCampaigns />
      <CharityHero />
      <CharityServices />
      <Stats />
      <CallToAction />
      <SuccessStories />
      <Testimonial />
      <FAQSection />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
