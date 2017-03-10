import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Home from './components/Home';
import Crawler from './components/Crawler'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home }/>
			<Route path="crawl" component={ Crawler }/>
		</Route>
	</Router>
),  document.getElementById('root'));
