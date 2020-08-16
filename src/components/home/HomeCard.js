import React from "react";
import "./HomePage.css";
import PropTypes from "prop-types";

const HomeCard = ({ title, paragraph }) => (
  <div className="HomeCard-card">
    <div className="HomeCard-title">
      <h1>{title}</h1>
    </div>

    <div className="HomeCard-text">
      <p>{paragraph}</p>
    </div>
  </div>
);

HomeCard.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default HomeCard;
