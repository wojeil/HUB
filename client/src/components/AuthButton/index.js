import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Auth from "../../utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";


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
				<span id="red">Logout</span>
			</Link>
		) : (
				<Link
					className="nav-link"
					to="/login"
				><span id="blue">Login</span>
				</Link>
			)
	)
}

export default AuthButton;