import React, { useEffect, useState } from "react";
import Announcements from "../Announcement"
import API from "../../utils/API"
import AdminDashBoardForm from "../AdminDashBoardForm"
import{Row,Col} from "../Grid"
function AdminDashBoard (){

    const [announcements, setAnnouncements] = useState([])

    //load all announcements
    useEffect(()=> {
        loadAnnouncements()
    },[])
    
    function loadAnnouncements (){
        
        API.getAnnouncements()
        .then(res =>{
            console.log(res)
            setAnnouncements(res.data.items)
            console.log("userdash" , res.data)
        }
            )
            .catch(err => console.log(err));
    };

    return(
        <div className="container" id="dashBoard">
            <Row>
                <Col size="sm-6">
        <div id="shortTerm">{announcements.length === 0 ? "" : announcements.map((announcement,i )=> {
                return(
                    
                    <Announcements key={i} title={announcement.title} type={announcement.type} body={announcement.body} loadAnnouncements={loadAnnouncements} />      
                )
            })}
            
            

        </div>
        </Col>
        <Col size="sm-6">
        <div  id="longTerm">
        {announcements.map(announcement => {
                return(
                    <Announcements key={announcement._id} title={announcement.title} type={announcement.type} body={announcement.body} />      
                )
            })}
        </div>
        </Col>
        </Row>

        <AdminDashBoardForm loadAnnouncements={loadAnnouncements}/>
    </div>
    );
}

export default AdminDashBoard