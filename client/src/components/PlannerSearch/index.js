import React, {useEffect, useState} from "react";
import { Container } from "../Grid"
import Card from "../Card"
import TeamMates from "../TeamMates"
import API from "../../utils/API"



function PlannerSearch() {

    const [users, setUser] = useState("")
    
    
    useEffect(() => {
        loadPlans();
    },[])

    function loadPlans() {

        API.getUser()
            .then(res => {
                // setUser(res.data[0].schedule);
                console.log("user", res);
            }
            ).then(() => {
                console.log("the user", users);
            })
            .catch(err => console.log(err));
    };

    return (

        <Container>
            <TeamMates />
            <Card title="Find Your TeamMate's Planner">
            <form>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    {!users ? "" :users.map((user, i) => {
                            return (
                                <option key={i} >{user}</option>
                            )
                        })}
                    </select>
                </div>
            </form>
            </Card>
        </Container>
    )
}

export default PlannerSearch