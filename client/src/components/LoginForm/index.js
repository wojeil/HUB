import React, { useRef } from 'react'
import Card from "../Card"
import {Container} from "../Grid"

function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<Container>
		<Card title="Login with your Username and Password">
			<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onLogin({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<label>Username:</label>
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<label>Password:</label>
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn-success" type='submit'>
						Submit
						</button>
				</div>
			</form>
		</Card>
		</Container>
	)
}


export default LoginForm