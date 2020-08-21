import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/articles/";

export function getArticles() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
