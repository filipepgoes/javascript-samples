import React from 'react';
import auth from './auth';
export const ProtectedPage = props => {
	return (
		<div>
		<h1>Protected Page</h1>
		<button onClick={()=>{
			auth.logout(()=>{
				props.history.push("/");
			});
		}}>Logout</button>
		</div>
	)
};