import React,{Component} from 'react';

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        };
    }

    handleInputChange =(e)=>{
        const {value,name}= e.target;
        this.setState({
            [name]:value
        });
    }

    onSubmit =(e)=>{
        e.preventDefault();
        fetch('/login',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(user_token=>{
            let { token } = user_token;
            localStorage.setItem('token', token);
            this.props.history.push('/');
            
        })
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <input type="text" autoComplete="true" name="username" placeholder="Usuário" value={this.state.username} onChange={this.handleInputChange}></input>
                <input type="password"  autoComplete="true" name="password" placeholder="Senha" value={this.state.password} onChange={this.handleInputChange}></input>
                <input type="submit" value="Entrar"/>
            </form>
        )
    }
}