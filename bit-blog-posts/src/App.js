import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FullPost } from "./components/Home/ListPosts/SinglePost/FullPost/FullPost";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:postId" component={FullPost} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
