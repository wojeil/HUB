import React, {useEffect, useState} from "react";


function TeamMates (){




    return(
        <>
        
        <table className="table table-striped table-dark">
            <thead>
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
                    {!plans ? "" :plans[0].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}

                </tr>
                <tr>
                    <th scope="row">0900</th>
                    {!plans ? "" :plans[1].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1000</th>
                    {!plans ? "" :plans[2].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1100</th>
                    {!plans ? "" :plans[3].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1200</th>
                    {!plans ? "" :plans[4].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1300</th>
                    {!plans ? "" :plans[5].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1400</th>
                    {!plans ? "" :plans[6].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1500</th>
                    {!plans ? "" :plans[7].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1600</th>
                    {!plans ? "" :plans[8].map((plan, i) => {
                        return (
                            <td key={i} >{plan}</td>
                        )
                    })}
                </tr>
                <tr>
                    <th scope="row">1700</th>
                    {!plans ? "" :plans[9].map((plan, i) => {
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