import React from "react";
import "./ListPosts.scss";
import { SinglePost } from "./SinglePost/SinglePost";

class ListPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div className="ListPosts__wrapper">
        {this.state.posts.map((post) => (
          <SinglePost
            key={post.id}
            title={post.title}
            description={`${post.body.slice(0, 100)}...`}
          />
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          posts: data,
        })
      );
  }
}

export { ListPosts };

//body, id, title, userId
