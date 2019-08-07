import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBaseballBall,
  faFootballBall,
  faBasketballBall,
  faHockeyPuck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

library.add(faBaseballBall, faFootballBall, faBasketballBall, faHockeyPuck);

class Home extends Component {
  render() {
    return (
      <div className="home-container container">
        <div className="row">
          <div className="col-md-2 col-sm-2 " />
          <div className="col-md-2 col-sm-2">
            <Link to="/baseball-stats">
              <FontAwesomeIcon icon="baseball-ball" size="6x" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-2">
            <Link to="/football-stats">
              <FontAwesomeIcon icon="football-ball" size="6x" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-2">
            <Link to="basketball-stats">
              <FontAwesomeIcon icon="basketball-ball" size="6x" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-2">
            <Link to="hockey-stats">
              <FontAwesomeIcon icon="hockey-puck" size="6x" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-2" />
        </div>
      </div>
    );
  }
}

export default Home;
