import React, { useRef } from 'react'
import Card from "../Card"
import Roles from "../../utils/roles"

// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();
	const permissionsRef = useRef();

	return (
		<Card title="Register a New User">
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					console.log(permissionsRef.current)
					return onRegister({
						username: userNameRef.current.value,
						password: passwordRef.current.value,
						role: permissionsRef.current.value
					});
				}}
			>
				<div className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<select className="custom-select" ref={permissionsRef}>
						<option  defaultValue >{Roles.User}</option>
						<option>{Roles.Admin}</option>
					</select>
					<button className="btn btn btn-primary" type='submit'>Submit</button>
				</div>
			</form>
		</Card>
	)
}


export default RegisterForm