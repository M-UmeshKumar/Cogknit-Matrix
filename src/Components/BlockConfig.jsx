import React from 'react';

export default class BlockConfig extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Rows:null,
            Columns:null,
        }
    }
    handleInput=(propName,event)=>{
        this.setState({
          [propName]:parseInt(event.currentTarget.value)
        })
      }
      handleOnClear=()=>{
        this.setState({
            Rows:0,
            Columns:0,
        },()=>{
            this.props.handleOnClear();
        })
        
      }
    render() {
        return (
            <div className="container p-3">
                <div className="row text-center">
                    <h4>Block Config</h4>
                </div>
                <div className="row p-1">
                    <div className="col text-center">Rows</div>
                    <div className="col text-center"><input type="number" value={this.state.Rows} placeholder="0" onChange={(e) => this.handleInput("Rows", e)} />
                    </div> </div>
                <div className="row p-1">
                    <div className="col text-center">Columns</div><div className="col text-center"> <input type="number" value={this.state.Columns} placeholder="0" onChange={(e) => this.handleInput("Columns", e)} /></div>
                </div>
                <div className="row p-1">
                <div className="col"/>
                <div className="col"><button className="btn btn-primary btn-sm" onClick={() => this.props.handleOnGenerate(this.state)}>Generate</button></div>
                <div className="col"><button className="btn btn-danger btn-sm" onClick={this.handleOnClear}>Clear</button></div>
                <div className="col"/>
                </div>
            </div>
        )
    }
}