import React from 'react';
import "./mylogin.css";
import Card from "../../components/Card";



/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function PublicRoute() {

    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid" id="logindiv" >
                <h1 className="display-4">Welcome to The HUB</h1>
                <p className="lead">A Home that keeps you connected.</p>
            </div>
        </div>

        <div className="about" id="homeContainer">
            <div className="row" id="homerow">
                <div className="col">
                  <Card title ="About Us">
                      <p>We are your convenience in a workplace enviroment. The HUB was designed to facilitate work-flow through efficient communication. We believe Teamwork and Communication amongst peers will lead to greater results. 
                      Sign Up and experience success.</p>
                  </Card>

                </div>

            </div>
        </div>
        </>
    )
}


export default PublicRoute