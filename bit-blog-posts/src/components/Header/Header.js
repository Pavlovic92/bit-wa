import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header__wrapper">
      <div className=" container">
        <div className="row">
          <h1 className="col-lg-9 col-md-6 col-sm-6 col-12">BIT BLOG</h1>
          <Link
            to="/"
            className="Header__menu col-lg-1 col-md-2 col-sm-2 col-2"
          >
            Home
          </Link>
          <Link className=" Header__menu col-lg-1 col-md-2 col-sm-2 col-2">
            Authors
          </Link>
          <Link className=" Header__menu col-lg-1 col-md-2 col-sm-2 col-2">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Header };
