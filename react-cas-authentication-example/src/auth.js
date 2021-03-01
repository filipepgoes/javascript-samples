import CasClient, { constant } from "react-cas-client";
 


class auth{
	constructor(){
		this.authenticated=false;
        let casEndpoint = "your-cas-instance";
        let casOptions = { 
            version: constant.CAS_VERSION_3_0, 
            validation_proxy_path: '/cas_proxy',
        };
 
        this.casClient = new CasClient(casEndpoint, casOptions);
	}
	login(cb){
		

        // Basic usage
        this.casClient
        .auth()
        .then(successRes => {
            console.log(successRes);
            // Login user in state / locationStorage ()
            // eg. loginUser(response.user);
            this.authenticated=true;
		    cb();
            // Update current path to trim any extra params in url
            // eg. this.props.history.replace(response.currentPath);
        })
        .catch(errorRes => {
            console.error(errorRes);
            // Error handling
            // displayErrorByType(errorRes.type)

            // Update current path to trim any extra params in url
            // eg. this.props.history.replace(response.currentPath);
        });

       
	}
	logout(cb){
        // Assume current url is https://localhost.com/
 
        // Basic usage
        this.casClient.logout();
        
		this.authenticated=false;
		cb();
	}
	isAuthenticated(){
		return this.authenticated;
	}
}

export default new auth();