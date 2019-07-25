import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { logOut, setAlert } from "../../actions";

const Navbar = props => {
  const handleLogOut = () => {
    props.logOut();
    props.setAlert({
      msg: "You were logged out successfully.",
      type: "success"
    });
  };

  if (props.isAuthenticated) {
    return (
      <nav className="navbar bg-main">
        <h1>
          <i className="fas fa-puzzle-piece" /> Polyglot
        </h1>
        <ul>
          <li>
            <NavLink to="/posts" activeClassName="navbar-active">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/profiles/me" activeClassName="navbar-active">
              <i className="fas fa-user-circle fa-lg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/users/me" activeClassName="navbar-active">
              <i className="fas fa-cogs fa-lg" />
            </NavLink>
          </li>
          <li
            onClick={handleLogOut}
            style={{ cursor: "pointer", marginRight: "1rem" }}
          >
            <i className="fas fa-door-open fa-lg" />
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="navbar bg-main">
      <h1>
        <i className="fas fa-puzzle-piece" /> Polyglot
      </h1>
      <ul>
        <li>
          <NavLink to="/auth/register" activeClassName="navbar-active">
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth/login" activeClassName="navbar-active">
            Login <i className="fas fa-sign-in-alt" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(
  mapStateToProps,
  { logOut, setAlert }
)(Navbar);
