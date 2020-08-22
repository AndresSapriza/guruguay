import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as articleActions from "../../redux/actions/actionArticle";
import "./HomePage.css";
import HomeFirstCard from "./HomeFirstCard";
import PropTypes from "prop-types";
import ArticleCard from "./ArticleCard";

const HomePage = ({ articles, loadArticles }) => {
  const h1Text = "GURU’GUAY";
  const pText =
    "A Uruguay travel guide with passion and soul. Lovingly curated since 2013 by Karen A Higgs. If you love to experience new places that have maintained their original charm, then Uruguay is the perfect place for you";
  useEffect(() => {
    if (articles.length === 0) {
      loadArticles().catch((error) => {
        alert("Loading articles failed " + error);
      });
    }
  });

  return (
    <>
      <HomeFirstCard title={h1Text} paragraph={pText} />
      <div className="Container">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </>
  );
};

HomePage.propTypes = {
  articles: PropTypes.array.isRequired,
  loadArticles: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

const mapDispatchToProps = {
  loadArticles: articleActions.loadArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
