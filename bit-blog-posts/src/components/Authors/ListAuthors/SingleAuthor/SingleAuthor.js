import React from "react";
import "./SingleAuthor.scss";
import { Link } from "react-router-dom";

const SingleAuthor = (props) => {
  return (
    <div className="SingleAuthor__wrapper">
      <Link to={`/author/${props.id}`}>
        <h5>{props.name}</h5>
      </Link>
      <hr />
    </div>
  );
};

export { SingleAuthor };
