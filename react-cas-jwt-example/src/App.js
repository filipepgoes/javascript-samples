import React from 'react';
import {NavLink, Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Secret from './components/Secret';
import withAuth from './auth/withAuth';
import Logout from './components/Logout';

 function App() {
  return (
    <div className="nav">
       <BrowserRouter>
      <ul>
        <li><NavLink  activeClassName="is-active" to ="/">Home</NavLink ></li>
        <li><NavLink activeClassName="is-active" to ="/secret">Protegido</NavLink ></li>
        {/*<li><NavLink  activeClassName="is-active"  to ="/login">Login</NavLink ></li>*/}
        <li><NavLink  activeClassName="is-active" to ="/logout">Logout</NavLink ></li>
      </ul>
      <div className="flex-container">
      <Switch>
       
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          {/*<Route path="/login" component={Login} />*/}
          <Route path ="/logout" component ={Logout}/>
         
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
