import React from "react";
import "./SinglePost.scss";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  return (
    <div className="SinglePost__wrapper">
      <Link to={`/post/${props.id}`}>
        <h5>{props.title}</h5>
      </Link>
      <p>{props.description} </p>
      <hr />
    </div>
  );
};

export { SinglePost };
