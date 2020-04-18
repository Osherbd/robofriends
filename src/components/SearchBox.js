import React, { Component, Fragment } from 'react';

class SearchBox extends Component 
{
    render()
    {
        return (
            <Fragment>
                <div className='ma2'>
                    <input type='search'
                           className='pa3 ba b--green bg-lightest-blue br2'
                           placeholder='Search'
                           onChange={this.props.searchChanged}
                    />
                </div>
            </Fragment>
        );
    }

}

export default SearchBox;