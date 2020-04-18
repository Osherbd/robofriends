import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component 
{
    constructor() 
    {
        super();
        this.state = {
            robots: [],
            filter: ''
        };
    }

    render()
    {
        let { robots, filter } = this.state;
        const filtered = robots.filter(robot => robot.name.toLowerCase().includes(filter));
        return (
            <Fragment>
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <SearchBox searchChanged={this.onSearchFilterChanged}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filtered} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            </Fragment>
        );
    }

    onSearchFilterChanged = (event) =>
    {
        this.setState({ filter : event.target.value });
    }

    async componentDidMount() 
    {
        const robots = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
        this.setState({ robots : robots });
    }

}

export default App;