import './index.css';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import listReactFiles from 'list-react-files'

import Welcome from './Welcome';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Blog from './Blog';

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
          </Switch>
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
