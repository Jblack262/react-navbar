import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {links, socials} from './util/consts';
import {Home, About, Store} from './pages';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router >
    <div className="App">
      <Navbar title="Coding Addict" links={links} socials={socials}/>
      <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/store" exact component={() => <Store />} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
