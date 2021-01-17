import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function articleReducer(state = initialState.articles, action) {
  switch (action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      return action.articles;
    case types.CREATE_ARTICLE_SUCCESS:
      debugger;
      return [...state, { ...action.article }];
    default:
      return state;
  }
}
