import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Guide from "./Guide";
import AboutUs from "./AboutUs";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>

            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/Guide">
              <Guide />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
