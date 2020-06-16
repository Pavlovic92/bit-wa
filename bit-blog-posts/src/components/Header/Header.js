import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header__wrapper">
      <div className=" container">
        <div className="row">
          <h1 className="col-lg-9 col-md-6 col-sm-6 col-12">BIT BLOG</h1>
          <p className="col-lg-1 col-md-2 col-sm-2 col-2">Home</p>
          <p className="col-lg-1 col-md-2 col-sm-2 col-2">Authors</p>
          <p className="col-lg-1 col-md-2 col-sm-2 col-2">About</p>
        </div>
      </div>
    </div>
  );
};

export { Header };
