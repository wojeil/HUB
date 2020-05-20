import React from "react";



function TeamMates ({planners,userNames}){
   
    return(
        <>
        
        <table className="table table-striped table-dark">
         <thead>
                    <tr><th id="userNames"> 
                       
                            {userNames}
                 
                  </th></tr>
                <tr> 
                    <th scope="col">Hours</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                    <th scope="col">Sunday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">0800</th>
                    {!planners ? "" :planners[0].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}

                </tr>
                <tr>
                    <th scope="row">0900</th>
                    {!planners ? "" :planners[1].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1000</th>
                    {!planners ? "" :planners[2].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1100</th>
                    {!planners ? "" :planners[3].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1200</th>
                    {!planners ? "" :planners[4].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1300</th>
                    {!planners ? "" :planners[5].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1400</th>
                    {!planners ? "" :planners[6].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1500</th>
                    {!planners ? "" :planners[7].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1600</th>
                    {!planners ? "" :planners[8].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1700</th>
                    {!planners ? "" :planners[9].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
              
            </tbody>
            
        </table>

        </>

    )
}

export default TeamMates