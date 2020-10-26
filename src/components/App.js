import React from 'react';
import '../styles/App.scss';
import List from './List';
import Data from "../services/data";
import Pulse from 'react-reveal/Pulse';

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
            <div className="App_header">
              <div className = "triangle"></div>
              <Pulse>
              <h1 className="title">Jardines Históricos y Singulares de Madrid</h1>
              </Pulse>
            </div>
          <div className="grid-container">
            <List gardens={this.state.gardens}/>
          </div>
        </div>
  );
}
}
export default App;
