import React from 'react';
import ReactJson from 'react-json-view';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      response: null
    }
    this.loadData = this.loadData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  async loadData() {
    const response = await axios.get('/ilp?hash=' + this.state.input);
    this.setState({ response })
  }

  render() {
    const { response } = this.state;
    const json = response && <ReactJson src={response} />
    return (
      <div className="App">
        <div className="left">
          <textarea type="text" value={this.state.input} onChange={this.handleChange} className="fullsize" />

        </div>
        <div className="center">
          <button className="button" onClick={this.loadData}>Decode</button>
        </div>
        <div className="right">
          {json}
        </div>
      </div>
    );
  }
}

export default App;
