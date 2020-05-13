/*Authentication*/
/**
 * I decide to move everything out here to clean up the environment
 */
// import { UserContext } from "../../utils/UserContext";
const Auth = {
	isAuthenticated: false,
	isAdmin:false,
	authenticate(cb) {
		// req.user on backend will contain user info if
		// this person has credentials that are valid
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				if (res.status !== 200) {
					return false;
				}
				return res.json(res)
			}).then(data =>{
				//added this for the response code check on deployment
				console.log("test", data)
				
				if(data.role === "Admin"){
					 this.isAdmin = true;
				}
				
				this.isAuthenticated = true
				console.log(this.isAdmin)
				if (typeof cb === 'function') {
					console.log(`User in Auth.js ${data}`);
					cb(data);
				}
				
			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});
	},
	signout(cb) {
		fetch('api/users/logout', {
			method: 'POST',
			credentials: 'include'
		})
			.then((res) => {
				this.isAuthenticated = false;
				if (typeof cb === 'function') {
					// user was logged out
					cb(true);
				}
			})
			.catch((err) => {
				console.log('Error logging out user.');
				if (typeof cb === 'function') {
					// user was not logged out
					cb(false);
				}
			});
	}
}

export default Auth;