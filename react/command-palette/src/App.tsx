import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useKeyPress from "./hooks/useKeyPress";
import SearchModal from "./components/SearchModal";
import Home from "./components/Home";
import About from "./components/About";
import Playground from "./components/Playground";

export default function App() {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const ctrlKey = useKeyPress("Control");
  const kKey = useKeyPress("a");

  useEffect(() => {
    if (ctrlKey && kKey) {
      setShowSearchModal(true);
    }
  }, [ctrlKey, kKey]);

  return (
    <Router>
      <React.Fragment>
        {showSearchModal && (
          <SearchModal setShowSearchModal={setShowSearchModal} />
        )}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/playground'>
            <Playground />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
