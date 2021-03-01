import React from 'react'
import auth from './auth';

export const PublicPage = (props) => {
	return <div>
		<h1>Public Page</h1>
		<button onClick={
				()=>{
				auth.login(
					()=>{
						props.history.push("/app");
					}
				);
			}
		}>
		Login
		</button>
	</div>;
};