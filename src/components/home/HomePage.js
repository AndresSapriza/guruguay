import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as articleActions from "../../redux/actions/actionArticle";
import "./HomePage.css";
import HomeFirstCard from "./HomeFirstCard";
import PropTypes from "prop-types";
import ArticleCard from "./ArticleCard";
import SVGIcon from "../common/SVGIcon";
import * as iconTypes from "../common/SVGs/IconTypes";
import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const HomePage = ({ articles, loadArticles }) => {
  const h1Text = "GURU’GUAY";
  const pText =
    "A Uruguay travel guide with passion and soul. Lovingly curated since 2013 by Karen A Higgs. If you love to experience new places that have maintained their original charm, then Uruguay is the perfect place for you";

  let history = useHistory();
  useEffect(() => {
    if (articles.length === 0) {
      loadArticles().catch((error) => {
        alert("Loading articles failed " + error);
      });
    }
  });
  const toNewArticle = () => {
    let path = "/article";
    history.push(path);
  };
  return (
    <>
      <HomeFirstCard title={h1Text} paragraph={pText} />
      <div className="Container">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
      <a className="Float" data-tip="Add article">
        <SVGIcon
          height="32px"
          widt="32px"
          iconClass="IconFloat"
          path={iconTypes.ADD_ICON}
          onClick={toNewArticle}
        />
      </a>
      <ReactTooltip />
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
