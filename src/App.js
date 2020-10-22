import React from 'react';
import './App.scss';
import List from './components/List';
import Data from "./services/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gardens: Data,
    };
  }

  render() {
    return (
        <div className="App">
          <div className="grid-container">
            <h1 className="portada">Jardines Históricos y Singulares de Madrid</h1>
            <List gardens={this.state.gardens}/>
          </div>
        </div>
  );
}
}
export default App;
