import './index.css';
import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import listReactFiles from 'list-react-files'

import Welcome from './Welcome';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Blog from './Blog';

import HelloWorld from './posts/HelloWorld';

function App() {

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Router basename="/portfolio">
          <Switch>
              <Route path="/" exact component={() => <Welcome />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/work" exact component={() => <Work />} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/blog" exact component={() => <Blog />} />
              <Route path="/hello-world" exact component={() => <HelloWorld />} />
          </Switch>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
