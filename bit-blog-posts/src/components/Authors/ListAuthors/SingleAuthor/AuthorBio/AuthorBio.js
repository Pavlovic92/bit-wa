import React from "react";
import "./AuthorBio.scss";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

class AuthorBio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: [],
      authorAddress: [],
    };
  }

  render() {
    return (
      <div className="AuthorBio__wrapper container">
        <Link to="/authors">
          <p id="go-back">
            <IoMdArrowRoundBack />
            Back
          </p>
        </Link>
        <div className="AuthorBio__name-wrapper row">
          <img className="col-lg-4" />
          <div className="AuthorBio__name col-lg-8">
            <h3>{this.state.author.name}</h3>
            <p>{this.state.author.username}</p>
            <p>{this.state.author.email}</p>
            <p>{this.state.author.phone}</p>
          </div>
        </div>
        <div className="AuthorBio__address row">
          <div className="AuthorBio__name col-lg-4">
            <h3>{this.state.authorAddress.street}</h3>
            <p>{this.state.authorAddress.city}</p>
            <p>{this.state.authorAddress.zipcode}</p>
          </div>
          <iframe className="col-lg-8"></iframe>
        </div>
        <div className="AuthorBio__company row"></div>
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.authorId;

    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          author: data,
          authorAddress: data.address,
        })
      );
  }
}

export { AuthorBio };
