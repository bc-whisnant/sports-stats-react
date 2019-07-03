/* eslint-disable */
import React from 'react';
import './App.css';
import Home from './components/Home'
import BaseballStats from './components/BaseballStats'
import FootballStats from './components/FootballStats'
import BasketballStats from './components/BasketballStats'
import HockeyStats from './components/HockeyStats'




import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
        <Switch>
          <Route path="/baseball-stats" exact component={BaseballStats} />
          <Route path="/football-stats" exact component={FootballStats} />
          <Route path="/basketball-stats" exact component={BasketballStats} />
          <Route path="/hockey-stats" exact component={HockeyStats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
/* eslint-enable */
