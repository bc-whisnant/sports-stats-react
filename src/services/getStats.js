import axios from "axios";

const apiBaseballClient = axios.create({
  baseURL: 'https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/',
  headers: {
    Authorization: 'Basic MWEzYjdlNjQtMjAyNC00NWIwLTg1MWQtOWE3MmI1Ok1ZU1BPUlRTRkVFRFM='
  }
});

const apiFootballClient = axios.create({
  baseURL: 'https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/',
  headers: {
    Authorization: 'Basic MWEzYjdlNjQtMjAyNC00NWIwLTg1MWQtOWE3MmI1Ok1ZU1BPUlRTRkVFRFM='
  }
});

const apiBasketballClient = axios.create({
  baseURL: 'https://api.mysportsfeeds.com/v2.1/pull/nba/2018-2019-regular/',
  headers: {
    Authorization: 'Basic MWEzYjdlNjQtMjAyNC00NWIwLTg1MWQtOWE3MmI1Ok1ZU1BPUlRTRkVFRFM='
  }
});

const apiHockeyClient = axios.create({
  baseURL: 'https://api.mysportsfeeds.com/v2.1/pull/nhl/2019-2020-regular/',
  headers: {
    Authorization: 'Basic MWEzYjdlNjQtMjAyNC00NWIwLTg1MWQtOWE3MmI1Ok1ZU1BPUlRTRkVFRFM='
  }
});

export default {
  getBaseballScores() {
    console.log(apiBaseballClient.get("standings.json"))
    return apiBaseballClient.get("standings.json");
  },
  getFootballScores() {
    console.log(apiFootballClient.get("standings.json"))
    return apiFootballClient.get("standings.json");
  },
  getBasketballScores() {
    console.log(apiBasketballClient.get("standings.json"))
    return apiBasketballClient.get("standings.json");
  },
  getHockeyScores() {
    console.log(apiHockeyClient.get("standings.json"))
    return apiHockeyClient.get("standings.json");
  }
};
