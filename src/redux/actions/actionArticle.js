import * as types from "./actionTypes";
import * as articleApi from "../../api/articleApi";
// import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadArticlesSuccess(articles) {
  return { type: types.LOAD_ARTICLES_SUCCESS, articles };
}

export function createArticleSuccess(article) {
  return { type: types.CREATE_ARTICLE_SUCCESS, article };
}

export function loadArticles() {
  return function (dispatch) {
    // dispatch(beginApiCall());
    return articleApi
      .getArticles()
      .then((articles) => {
        dispatch(loadArticlesSuccess(articles));
      })
      .catch((error) => {
        // dispatch(apiCallError());
        throw error;
      });
  };
}

export function saveArticle(article) {
  return function (dispatch) {
    // dispatch(beginApiCall());
    return articleApi
      .saveArticle(article)
      .then((savedArticle) => {
        dispatch(createArticleSuccess(savedArticle));
      })
      .catch((error) => {
        // dispatch(apiCallError());
        throw error;
      });
  };
}
