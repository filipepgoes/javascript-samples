import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import cookie from 'react-cookies';
const util = require('../cas/util');
const urls = require('../cas/url');
const constant = require('../cas/constant');

export default function withAuth(ComponentInside){
 return class extends Component {
    constructor(){
        super();
        this.state={
            loading:true,
            redirectToHome:false,
            redirectToSame:false,
            casProperties : {
                version: constant.CAS_VERSION_3_0,
                redirectUrl : util.getCurrentUrl(),
                protocol: 'https',
                endpoint: '<your-cas-instance>',
                path: '/cas'
            }
        };
    }
    componentDidMount() {
        let ticket = util.getParamFromCurrentUrl('ticket');
        let token = cookie.load('token');
        if (typeof token === 'undefined'){
            token = null;
        }
    
        //console.log(token);
        if(util.isEmpty(ticket) && (token===null)){
                console.log('Without ticket, without token, redirecting to CAS.');
                // Sends to cas.
                window.location.href = urls.getLoginUrl(this.state.casProperties);
        }
        else if (util.isEmpty(ticket) && !(token===null)){    
            console.log('Without ticket, with token, validating token.');
            fetch('/react-cas-authentication-example-api/rest/api/', {
                credentials: "include",
                headers: { 'x-access-token': token }
            })
            .then(res => {
                if (res.status === 200) {
                  this.setState({ loading: false, redirectToSame: false });
                } 
                else {
                    cookie.remove('token');
                    this.setState({ loading: false, redirectToSame: true });
                }
            })
            .catch(err => {
                console.error(err);
                this.setState({ loading: false, redirectToHome: true });
            });
        } 
        else {
            console.log('With ticket, saving as token and redirecting to the same page.');
            console.log(typeof cookie.load('token'));
            if (!(typeof cookie.load('token') === 'undefined')){
                cookie.remove('token');
            }
            cookie.save(
                'token',
                ticket,
                {
                    path: '/',
                    domain: 'react-cas-jwt-example.test',
                    secure: true,
                    sameSite: true
                }
            );
            window.location.href = window.location.href.split('?')[0];
        }   
    }


    render(){
        const{loading, redirectToHome, redirectToSame} = this.state;
        if(loading){
            return null;
        }
        if(redirectToHome){
            return <Redirect to ="/home"/>
        }
        if(redirectToSame){
            return <Redirect push to ={this.props.location.pathname}/>
        }
        return <ComponentInside {...this.props}/>
    }
}
} 