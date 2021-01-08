import React from 'react';

export default class BlockDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        var {Rows,Columns,selectedBox=[]}= this.props;
        var blocksData=[]
        var rowId=1
        for(var i=0;i<Rows;i++){
            var columns=[]
            for(var j=0;j<Columns;j++){
                columns.push(<div>{rowId}</div>)
                rowId++;
            }
            blocksData.push(columns);
        }
        return (
            <div className="container">
                <div className="row">
                <h4>Block Display</h4>
                </div>
                <div className="row" style={{height:300,overflow:"auto"}}>
                <div>
                {
                    Rows==0&&Columns==0?<div>Nothing to show, input value in row and column and click <strong>generate</strong></div> :blocksData.map((a,i)=>{
                        return <div className="row">{a.map((b,j)=>{
                            return <div className={(selectedBox[0]==i && selectedBox[1]==j) ? "col text-center w-25 h-25 border border-dark border-2 bg-info" :"col text-center border w-25 h-25 bg-info" } style={{cursor:"pointer",margin:10}} onClick={(e)=>this.props.handleOnSelected(i,j,e)}>{b}</div>;
                        })}
                        </div>
                    })
                }
                </div>
               
                </div>
                <div className="text-start">Total Block : <strong>{Rows*Columns}</strong></div>
            </div>
        )
    }
}