import React, { Component, Fragment } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        const { robots } = this.props;
        return(
            <Fragment>
                <div>
                    {robots.map((user, i) => <Card key={robots[i].id} 
                                                   id={robots[i].id} 
                                                   name={robots[i].name} 
                                                   email={robots[i].email} />)}
                </div>
            </Fragment>
        );

    }
}

export default CardList;