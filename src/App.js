import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Basket from "./Basket";

import Home from "./Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route path="/cart" component={Basket}>
        <Basket />
      </Route>
    </Router>
  );
}

export default App;
