import React from 'react';

export default class SelectedBox extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        var {selectedBox=undefined}=this.props
        
        return (
            <div className="container">
                <div className="row text-center">
                <h4>Selected Block</h4>
                </div>
                <div className="row text-center">
                
                <div>
                { !selectedBox?"Nothing to show":selectedBox[2]}
                </div>
                
            </div>
            </div>
        )
    }
}