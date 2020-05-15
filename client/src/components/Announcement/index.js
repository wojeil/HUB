import React from 'react'
import API from "../../utils/API"


function Announcements({title,body,type,loadAnnouncements}) {

    const handleSubmit = (e)=> {
        e.preventDefault();
        
        API.deleteAnnouncement({
            title: title
          
        })
        loadAnnouncements();
    }

    return (
        <div className="card">
            <div className="card-body"
          >
                <h3 className="card-title">{title}</h3>
                <h5>{type}</h5>
                <p className="card-text">{body}</p>
                <button onClick={handleSubmit} type= "submit" className="btn float-right">Delete</button>
            </div>
        </div>
    )
}

export default Announcements