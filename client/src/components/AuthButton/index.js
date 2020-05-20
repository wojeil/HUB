import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import "./style.css"

const AuthButton = () => {
	console.log("NAV", Auth.isAuthenticated);

	const [user, dispatch] = useContext(UserContext);
	const history = useHistory();

	return (
		Auth.isAuthenticated ? (
			<Link className="nav-link"
				onClick={() => {
					Auth.signout(() => {
						history.push('/login')
						dispatch({
							type: "GET_USER",
							payload: {}
						})

					})
				}}>
				Logout
			</Link>
		) : (
				<Link
					className="nav-link"
					to="/login"
				>Login
				</Link>
			)
	)
}

export default AuthButton;