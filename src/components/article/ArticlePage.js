import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ArticleCard from "../home/ArticleCard";
import ReactPlayer from "react-player";

const ArticlePage = ({ article }) => {
  return (
    <>
      <ReactPlayer url={article.video} />
      <ArticleCard key={article.id} article={article} />
    </>
  );
};

export function getArticleBySlug(articles, slug) {
  return articles.find((article) => article.slug === slug) || null;
}

ArticlePage.propTypes = {
  articles: PropTypes.array.isRequired,
  article: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const article = getArticleBySlug(state.articles, slug);
  return {
    article,
    articles: state.articles,
  };
}

export default connect(mapStateToProps)(ArticlePage);
