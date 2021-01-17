import React from "react";
import "./HomePage.css";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const ArticleCard = ({ article }) => {
  let history = useHistory();
  const articlePage = () => {
    let path = "/article/" + article.slug;
    history.push(path);
  };
  return (
    <div className="Article-card" onClick={articlePage}>
      <div className="Main-image">
        <img src={article.photoMain} alt={article.shortArticle.subTitle}></img>
      </div>
      <h2>{article.shortArticle.subTitle}</h2>
      <div className="Article-resume">
        <p>{article.shortArticle.resume}</p>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleCard;
