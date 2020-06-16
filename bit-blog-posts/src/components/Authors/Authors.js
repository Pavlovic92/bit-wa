import React from "react";
import "./Authors.scss";
import "./ListAuthors/ListAuthors";
import { ListAuthors } from "./ListAuthors/ListAuthors";

const Authors = () => {
  return (
    <div className="Authors__wrapper container">
      <h1>AUTHORS</h1>
      <div className="row">
        <ListAuthors />
      </div>
    </div>
  );
};

export { Authors };
