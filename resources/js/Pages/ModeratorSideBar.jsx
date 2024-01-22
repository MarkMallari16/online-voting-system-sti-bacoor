import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModeratorDashboard from "./ModeratorDashboard";
import ModeratorSideBar from "./ModeratorSideBar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <ModeratorSideBar />
        <div className="content">
          <Switch>
            <Route path="/moderator/dashboard" component={ModeratorDashboard} />
            {/* Add more routes for PartyLists, Moderators, Voters if needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};
