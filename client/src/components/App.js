import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import Alert from "./layout/Alert";
import Register from "./auth/Register";
import Login from "./auth/Login";
import User from "./user/User";
import CreateProfile from "./profile/CreateProfile";
import Profile from "./profile/Profile";
import Posts from "./posts/Posts";

import "../index.css";

const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route path="/auth/register" component={Register} />
            <Route path="/auth/Login" component={Login} />
            <Route path="/users/me" component={User} />
            <Route path="/profiles/me" component={Profile} />
            <Route path="/profiles/new" component={CreateProfile} />
            <Route path="/posts" component={Posts} />
          </div>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
