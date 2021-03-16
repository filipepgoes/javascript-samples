import React,{Component} from 'react';
import cookie from 'react-cookies';

export default class Logout extends Component {

  constructor(){
      
    super();
    this.state = { message: ""};
  }
    
    componentDidMount() {   
        let message ="";
        if(typeof cookie.load('token') === 'undefined'){
            message = "Please login.";
        }
        else{
          message = "Logout successfull.";
          cookie.remove('token');
        }
        this.setState({ message: message });
      }
        
      
    
      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        );
      }
}