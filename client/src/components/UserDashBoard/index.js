import React, { useEffect, useState } from "react";
import Announcements from "../Announcement"
import API from "../../utils/API"
import { Row, Col } from "../Grid"
import "./style.css"
function UserDashBoard (){

    const [announcements, setAnnouncements] = useState([])

    //load all announcements
    useEffect(()=> {
        loadAnnouncements()
    },[])
    
    function loadAnnouncements (){
        
        API.getAnnouncements()
        .then(res =>{
            // console.log(res)
            setAnnouncements(res.data.items)
            // console.log("userdash" , res.data)
        }
            )
            .catch(err => console.log(err));
    };

     //filter to split Long and Short Term Announcements
     let filterShortAn = announcements.filter(
        (shortAnnouncements) => {
            return shortAnnouncements.type ==="Short-Term";
        }
    );
    let filterLongAn = announcements.filter(
        (longAnnouncements) => {
            return longAnnouncements.type ==="Long-Term";
        }
    );
   

    return(
        <div className="user" id="dashBoard">
            <div className="user2">
        <Row>
            <Col size="sm-6">
            <h1>Short-Term</h1>
                <div id="shortTerm">
                    {announcements.length=== 0 ? "" : filterShortAn.map((announcement, i) => {
                        return (

                            <Announcements key={i} title={announcement.title} type={announcement.type} body={announcement.body} loadAnnouncements={loadAnnouncements} />
                        )
                    })}
                </div>
            </Col>

            <Col size="sm-6">
            <h1>Long-Term</h1>
                <div id="longTerm">
                    {announcements.length=== 0 ? "" : filterLongAn.map((announcement,i) => {
                        return (
                            <Announcements key={i} title={announcement.title} type={announcement.type} body={announcement.body} loadAnnouncements={loadAnnouncements} />
                        )
                    })}
                </div>

            </Col>
        </Row>
        </div>
        </div>
    );
}

export default UserDashBoard