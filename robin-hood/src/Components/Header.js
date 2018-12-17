import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <div className="col-xs-10 col-xs-offset-1">
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <tr className="active">
              <td className="primary">
                <Link to="/">Home</Link>
              </td>
              <td>
                <Link to="/about">About</Link>
              </td>
            </tr>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
