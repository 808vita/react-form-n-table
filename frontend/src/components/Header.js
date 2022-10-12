import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to={"/"}>
          <a
            className={`nav-link ${pathname === "/" && "active"}`}
            aria-current="page"
          >
            New Feedback
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/view-data"}>
          <a
            className={`nav-link ${pathname === "/view-data" && "active"}`}
            aria-current="page"
          >
            View Data
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
