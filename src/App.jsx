import logo from './logo.svg';
import React from 'react'
import './App.css';
import BlockDisplay from './Components/BlockDisplay'
import BlockConfig from './Components/BlockConfig'
import SelectedBox from './Components/SelectedBox'

class App extends React.Component {
  state = {
    Rows: 0,
    Columns: 0,
    selectedBox: undefined
  };

  handleOnSelected = (rowNumber, ColumnNumber,event) => {
    this.setState({
      selectedBox: [rowNumber, ColumnNumber,event.target.innerText]
    })
  }
  handleOnGenerate = (param) => {
    this.setState({
      Rows: param.Rows,
      Columns: param.Columns
    })
  }
  handleOnClear = () => {
    this.setState({
      Rows: 0,
      Columns: 0,
      selectedBox: undefined
    })
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="row border border-dark border-2 rounded rounded-3" style={{border: "2px solid #141619!important"}}>
          <div className="col">
            <BlockDisplay {...this.state} handleOnSelected={this.handleOnSelected} />
          </div>
          {/* <div className="col w-10 border border-left"/> */}
          <div className="col border-start border-dark border-2">
            <div className="row border-bottom border-dark border-2">
              <BlockConfig handleInput={this.handleInput} handleOnGenerate={this.handleOnGenerate} handleOnClear={this.handleOnClear} />
            </div>
            <div className="row">
              <SelectedBox selectedBox={this.state.selectedBox} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
