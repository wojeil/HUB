import React from 'react'

function Announcements({title,body,term}) {

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h5>{term}</h5>
                <p className="card-text">{body}</p>

            </div>
        </div>
    )
}

export default Announcements