import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Wrapper } from "./Wrapper";
import { ModalHops } from "./Modals/ModalHops";
import { ModalPokedex } from "./Modals/ModalPokedex";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" component={Navbar} />
          <Route path="/" exact component={Wrapper} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/hops" component={ModalHops} />
          <Route path="/portfolio/pokedex" component={ModalPokedex} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Footer} />
        </div>
      </Router>
    </div>
  );
};

export default App;
