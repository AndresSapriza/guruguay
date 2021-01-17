import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/articles/";

export function getArticles() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveArticle(article) {
  debugger;
  return fetch(baseUrl + (article.id || ""), {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(article),
  })
    .then(handleResponse)
    .catch(handleError);
}
