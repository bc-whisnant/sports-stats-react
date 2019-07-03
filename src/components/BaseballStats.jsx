/* eslint-disable */

import React, { Component } from "react";
import getStats from "../services/getStats.js";

class BaseballStats extends Component {
  // set initial state
  state = {
    teams: []
  };
  // get the baseball stats
  getStatistics = () => {
    getStats.getBaseballScores().then(response => {
      this.teams = response.data.teams;
      this.setState({
        teams: this.teams
      });
    });
  };
  
  // show the stats when mounted
  componentDidMount() {
    this.getStatistics();
  }

  render() {
    return (
      <div className="container content-container">
        {/* <div className="row mb-3">
          <div className="col-md-6 ml-auto mr-auto">
            <input type="text" className="form-control" placeholder="Search teams..." />
          </div>
        </div> */}
        <div className="row">
          {this.state.teams.map(team => (
            <div className="col-md-4 team-container" key={team.team.id}>
              <div className="card team-card">
                <h6>
                  {team.team.city} {team.team.name}
                </h6>
                <p>Wins: {team.stats.standings.wins}</p>
                <p>Losses: {team.stats.standings.losses}</p>
                <p> Rank: {team.overallRank.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BaseballStats;

/* eslint-enable */

