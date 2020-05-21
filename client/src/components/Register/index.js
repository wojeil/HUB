import React from 'react';
import RegisterForm from "../RegisterForm";
import { useHistory } from "react-router";
import Auth from "../../utils/Auth";
import styles from "./mystyle.module.css"
import Nav from "../Nav/index"

//The component for doing the actual signup of the User

function Register() {

	let history = useHistory();

	const register = (data) => {
		// //create a new dash document if the user is an admin
		// if(data.role === "Admin"){
		// 	fetch("api/dash/post", {
		// 		method: "POST",
		// 		body: JSON.stringify(data),
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		credentials: 'include'
		// 	}).then(res => {
		// 		if(res.status === 200){
		// 			console.log(`New Dash Created For ${data.username}`)
		// 		}
		// 	})
		// };
		fetch("api/plan/post", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		}).then(res => {
			console.log("Empty Plan Created");
		});
		
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
			.then((response) => {
				if (response.status === 200) {
					console.log('Succesfully registered user!');
					//relocate to the login page

					fetch('api/users/login', {
						method: 'POST',
						body: JSON.stringify(data),
						credentials: 'include',
						headers: {
							'Content-Type': 'application/json'
						},
					})
						.then((response) => {
							if (response.status === 200) { //All good
								Auth.authenticate(() => { //Update the boolean and take off the cuffs
									// setRedirectToReferrer(true)
									// console.log(`Response in login ${JSON.stringify(response)}`);
									if(!Auth.isAdmin){
									history.push("/protected")
									} else{
										history.push("/admin-dash")
									}
								});
							}
						})
						.catch((err) => {// No beuno, kick them
							console.log('Error logging in.', err);
						});
				}
			})
			.catch((err) => {
				console.log('Error registering user.', err);
			});
	}

	return (
		<div className={styles.bigpurple}>
			<Nav/>
			<RegisterForm onRegister={register} />
		</div>
	)

}

export default Register