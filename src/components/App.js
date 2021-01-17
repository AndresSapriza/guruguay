import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import GuruStore from "./store/GuruguayStore";
import ArticlePage from "./article/ArticlePage";
import AddArticle from "./article/AddArticle";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/gurustore" component={GuruStore} />
        <Route exact path="/article/:slug" component={ArticlePage} />
        <Route exact path="/article" component={AddArticle} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
