import React from "react";
import Announcements from "../Announcement"

function DashBoard (){

    return(
        <div className="container" id="dashBoard">
        <div id="shortTerm">
            <Announcements title="" term="" body="" />

        </div>
        <div id="longTerm">
            <Announcements title="" term="" body="" />

        </div>
    </div>
    );
}

export default DashBoard