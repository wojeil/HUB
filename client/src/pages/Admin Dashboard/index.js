import React from 'react';
import DashBoard from "../../components/DashBoard";
import AdminDashBoardForm from "../../components/AdminDashBoardForm"


function newPage() {
   
    return (


        <div className="container-fluid">
            <DashBoard />
            <hr />
            <AdminDashBoardForm/>
        </div>

    )

}

export default newPage;