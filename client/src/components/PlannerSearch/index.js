import React, { useEffect, useState } from "react";
import { Container } from "../Grid"
import Card from "../Card"
import TeamMates from "../TeamMates"
import API from "../../utils/API"


function PlannerSearch() {

    const [users, setUser] = useState("")
    const [planners, setPlanner] =useState("")
  

    useEffect(() => {
        loadUsers();
    }, [])

    function loadUsers() {
        const newUsers =[]
        
        API.getUser()
            .then(res => {
          
                // console.log("user", res.data);
                res.data.forEach(element => {
                    return newUsers.push(element.username);
                    
                });
            }
            ).then(() => {
                setUser(newUsers);
                // console.log("the user", newUsers);
            })
            .catch(err => console.log(err));
    };

  
    
  
    function handleClick (e){
        e.preventDefault();
        // console.log(e.target,"it clicks")
    API.getUserzPlanner(e.target.value )
    .then(res => {
        setPlanner(res.data.schedule);
        // console.log("userzplan", res.data.schedule);
    }
    ).then(() => {
         console.log("the selected schedule", planners);
    })
    .catch(err => console.log(err));
 };

 


    return (

        <Container>
            <TeamMates planners={planners} />
            <Card title="Find Your TeamMate's Planner">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1" onClick={handleClick}>
                            {!users ? "" : users.map((user, i) => {
                                return (
                                    <option value={user} key={i} >{user}</option>
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