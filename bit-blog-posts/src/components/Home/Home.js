import React from "react";
import "./Home.scss";
import { ListPosts } from "./ListPosts/ListPosts";

const Home = () => {
  return (
    <div className="Home__wrapper container">
      <h1>POSTS</h1>
      <div className="row">
        <ListPosts />
      </div>
    </div>
  );
};

export { Home };
