import React from 'react';
import ReactDOM from 'react-dom';

// Routing
import {Router, Route, IndexRoute} from 'react-router';
import {createHistory} from 'history';

// Import Components
import Main from './components/Main';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Profile from './components/Profile';


//ReactDOM.render(<Main />, document.querySelector('#app'));

// Routes
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Main} />
    <IndexRoute component={Main}/>
    <Route path="/profile" component={Main}/>
    <Route path="/profile/:username" component={Main}/>
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));
