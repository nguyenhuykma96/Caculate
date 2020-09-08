import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Result from "./view/Result";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "rc-slider/assets/index.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
