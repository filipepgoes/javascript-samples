import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PublicPage} from './public.page';
import {ProtectedPage} from './protected.page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ProtectedRoute} from './protected.route';

function App() {
  return (
    <div className="App">
		<h1>Protected React Router</h1>
		<Switch>
			<Route exact path="/" component={PublicPage} />
			<ProtectedRoute exact path="/app" component={ProtectedPage} />
			<Route path="*" component={()=>"404 NOT FOUND"}/>
		</Switch>
	</div>
  );
}

export default App;
