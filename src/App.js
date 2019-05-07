import React from 'react';
import ReactJson from 'react-json-view';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ReactJson src={jsonPacket} />
      </div>
    );
  }
}

export default App;
