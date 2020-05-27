import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Counter from "./Counter";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <TicketControl />
        </Route>
    {/* <React.Fragment>
      <Header />
      <TicketControl />
      <Counter />
    </React.Fragment> */}
      </Switch>
    </Router>
  );
}

export default App;