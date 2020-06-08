import React from 'react';
import { Header } from "./components/Header/Header"
import { MovieShow } from "./components/MovieShow/MovieShow"
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <MovieShow />
      <Footer />
    </div>
  );
}

export default App;
