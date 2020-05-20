import React, { useEffect, useContext } from 'react'
import { UserContext } from "../../utils/UserContext";
import AdminDashBoard from "../../components/AdminDashBoard";

function AdminPage() {
    const [user, dispatch] = useContext(UserContext)
	// console.log(user)

	useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				// console.log(`response to authenticate ${res}`);
				return res.json(res)

			})
			.then(data => {
				console.log(data);
				dispatch({
					type: "GET_USER",
					payload: data
				})

			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}, []);
    return (


        <div className="container-fluid">
            <AdminDashBoard />
            <hr />
           
        </div>

    )

}

export default AdminPage;