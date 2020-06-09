import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ListView } from './components/ListView/ListView';
import { GridView } from './components/GridView/GridView';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data.results })
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ListView users={this.state.users} />
        <GridView users={this.state.users} />
        <Footer />
      </div>
    );
  }
}

export default App;














































