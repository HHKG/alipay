import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../src/components/Home';
import Wealth from '../src/components/Wealth';
import PublicPraise from './components/PublicPraise';
import Person from './components/Person';

export default class HomePage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="nav">
                        <li><Link to="/" className="tabs"></Link></li>
                        <li><Link to="/Wealth" className="tabs">财富</Link></li>
                        <li><Link to="/PublicPraise" className="tabs">口碑</Link></li>
                        <li><Link to="/Person" className="tabs">我的</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Wealth" component={Wealth}></Route>
                    <Route path="/PublicPraise" component={PublicPraise}></Route>
                    <Route path="/Person" component={Person}></Route>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<HomePage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
