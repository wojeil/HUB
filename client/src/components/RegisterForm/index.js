import React, { useRef } from 'react'
import Card from "../Card"
import Roles from "../../utils/roles"
import { Container } from "../Grid"

// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();
	// const permissionsRef = useRef();
	const managerRef = useRef();

	return (
		<Container>
			<Card title="Register New User">
				<form
					ref={formRef}
					onSubmit={(e) => {
						e.preventDefault();
						// console.log(permissionsRef.current.value)
						return onRegister({
							username: userNameRef.current.value,
							password: passwordRef.current.value,
							role: Roles.User,
							manager: managerRef.current.value
						});
					}}
				>
					<div className="form-group">
						<label>Username:</label>
						<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
						<label>Password:</label>
						<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
						<label>Manager Password:</label>
						<input className="form-control" ref={managerRef} type="text" name="manager" placeholder="Your manager's password" /><br />


						{/* <select className="custom-select" ref={permissionsRef}>
						<option  defaultValue >{Roles.User}</option>
						<option>{Roles.Admin}</option>
					</select> */}

					</div>
					<button className="btn btn btn-primary" type='submit'>Submit</button>
				</form>
			</Card>

		</Container>

	)
}


export default RegisterForm