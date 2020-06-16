import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Authors } from "./components/Authors/Authors";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FullPost } from "./components/Home/ListPosts/SinglePost/FullPost/FullPost";
import { AuthorBio } from "./components/Authors/ListAuthors/SingleAuthor/AuthorBio/AuthorBio";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/authors" component={Authors} />
        <Route exact path="/post/:postId" component={FullPost} />
        <Route exact path="/author/:authorId" component={AuthorBio} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
