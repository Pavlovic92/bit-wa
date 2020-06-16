import React from "react";
import "./SinglePost.scss";

const SinglePost = (props) => {
  return (
    <div className="SinglePost__wrapper">
      <h5>{props.title}</h5>
      <p>
        {props.description} <hr />
      </p>
    </div>
  );
};

export { SinglePost };
