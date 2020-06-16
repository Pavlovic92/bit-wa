import React from "react";
import "./FullPost.scss";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

class FullPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  render() {
    return (
      <div className="FullPost__wrapper container">
        <Link to="/">
          <p id="go-back">
            <IoMdArrowRoundBack />
            Back
          </p>
        </Link>
        <div className="row">
          <h1 className="col-lg-12 col-md-12 col-sm-12 col-12">
            {this.state.post.title}
          </h1>
          {/*Ubaciti link do autora*/}
          <p className="description col-lg-12 col-md-12 col-sm-12 col-12">
            {this.state.post.body}
          </p>
          <hr />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.postId;

    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          post: data,
        })
      );
  }
}

export { FullPost };
