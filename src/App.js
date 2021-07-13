import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./container/LandingPage/LandingPage";
import EventPage from "./container/EventsPage/EventPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App"></div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path = "/events" component={EventPage}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
