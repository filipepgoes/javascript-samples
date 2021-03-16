import React,{Component} from 'react';
import cookie from 'react-cookies';

export default class Secret extends Component {
    constructor() {
        super();
        this.state = {
          message: 'Loading...'
        }
      }
    
      componentDidMount() {
        let token = cookie.load('token');
        //console.log(token);
        fetch('/react-cas-authentication-example-api/rest/api/protegido',{
            credentials: "include",
            headers: { 'x-access-token': token }
        })
          .then(res => res.text())
          .then(res => this.setState({message: res}));
      }
    
      render() {
        return (
          <div>
            <h1>Protected page</h1>
            <p>{this.state.message}</p>
          </div>
        );
      }
}