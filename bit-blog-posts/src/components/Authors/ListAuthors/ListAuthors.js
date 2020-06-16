import React from "react";
import "./ListAuthors.scss";
import { SingleAuthor } from "./SingleAuthor/SingleAuthor";

class ListAuthors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
    };
  }

  render() {
    return (
      <div className="ListAuthors__wrapper">
        {this.state.authors.map((author) => (
          <SingleAuthor key={author.id} id={author.id} name={author.name} />
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          authors: data,
        })
      );
  }
}

export { ListAuthors };
