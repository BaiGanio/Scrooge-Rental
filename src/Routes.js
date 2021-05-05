import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import NotFound from "../pages/NotFound/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
}