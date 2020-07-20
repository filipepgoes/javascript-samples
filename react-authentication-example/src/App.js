import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LandingPage} from './landing.page';
import {AppLayout} from './app.layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ProtectedRoute} from './protected.route';

function App() {
  return (
    <div className="App">
		<h1>Protected React Router</h1>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<ProtectedRoute exact path="/app" component={AppLayout} />
			<Route path="*" component={()=>"404 NOT FOUND"}/>
		</Switch>
	</div>
  );
}

export default App;
