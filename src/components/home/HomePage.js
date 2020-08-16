import React from "react";
import "./HomePage.css";
import HomeCard from "./HomeCard";

const HomePage = () => {
  const h1Text = "GURU’GUAY";
  const pText =
    "A Uruguay travel guide with passion and soul. Lovingly curated since 2013 by Karen A Higgs. If you love to experience new places that have maintained their original charm, then Uruguay is the perfect place for you";
  return (
    <div className="topImage">
      <HomeCard title={h1Text} paragraph={pText} />
    </div>
  );
};

export default HomePage;
