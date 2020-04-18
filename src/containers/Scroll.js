import React, {Component} from 'react';

class Scroll extends Component 
{
    render()
    {
        return(
            <div style={
                { 
                    overflow: 'scroll', 
                    overflowY: 'hidden', 
                    overflowX: 'hidden', 
                    border: '0px solid black', 
                    height: 'auto' 
                }
                }>
                {this.props.children}
            </div>
        );        
    }
}

export default Scroll;