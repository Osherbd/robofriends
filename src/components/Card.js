import React, { Component, Fragment } from 'react';

class Card extends Component{
    render() 
    {
        let {name, email, id} = this.props;
        return (
            <Fragment>
                <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
                    <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
                    <div className='tc'>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                </div>            
            </Fragment>
        ); 
    }
}

export default Card;