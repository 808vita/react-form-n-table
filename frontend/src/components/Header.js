import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to={"/"}>
          <p
            className={`nav-link ${pathname === "/" && "active"}`}
            aria-current="page"
          >
            New Feedback
          </p>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/view-data"}>
          <p
            className={`nav-link ${pathname === "/view-data" && "active"}`}
            aria-current="page"
          >
            View Data
          </p>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
