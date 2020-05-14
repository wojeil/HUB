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
            {announcements.map(announcement => {
                return(
                    <Announcements key={announcement._id} title={announcement.title} type={announcement.type} body={announcement.body} />      
                )
            })}
            

        </div>
        <div id="longTerm">
        {announcements.map(announcement => {
                return(
                    <Announcements key={announcement._id} title={announcement.title} type={announcement.type} body={announcement.body} />      
                )
            })}
        </div>
    </div>
    );
}

export default DashBoard