import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import './index.css';
import App from './App';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact component={App} path="/"/>
            <Redirect from="*" to="/"/>
            
        </Switch>
    </Router>,
    document.getElementById('root')
);

 


