import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
