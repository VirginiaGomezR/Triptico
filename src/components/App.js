import React from 'react';
import '../styles/App.scss';
import List from './List';
import Data from "../services/data";

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
            <div className="App_title">
            <h1 className="title">Jardines Históricos y Singulares de Madrid</h1>
            </div>
            <List gardens={this.state.gardens}/>
          </div>
        </div>
  );
}
}
export default App;
