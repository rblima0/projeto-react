import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AutorBox from './Autor';
import LivroBox from './Livro';
import Home from './Home';
import './index.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/autor" component={AutorBox}/>
                <Route path="/livro" component={LivroBox}/>
            </Switch>
        </App>
    </Router>

), document.getElementById('root'));
//registerServiceWorker();
