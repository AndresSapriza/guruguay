import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import GuruStore from "./store/GuruguayStore";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/gurustore" component={GuruStore} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
