import React, { useEffect } from "react";
import Announcements from "../Announcement"
import API from "../../utils/API"

function DashBoard (){

    const [announcements, setAnnouncements] = useState([])

    //load all announcements
    useEffect(()=> {
        loadAnnouncements()
    },[])
    
    function loadAnnouncements (){
        API.getAnnouncements()
        .then(res =>
            setAnnouncements(res.data)
            )
            .catch(err => console.log(err));
    };

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