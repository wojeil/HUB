import React,{useRef} from "react"
import FormButton from "../FormSubmitButton"
import { Container } from "../Grid"
import Card from "../Card"
import "./style.css"
import API from "../../utils/API"


function PlannerForm({loadPlans,update}) {
    
    const planFormRef= useRef();
    const dayRef= useRef();
    const timeRef= useRef();
    const planRef= useRef();

    const handleSubmit=(e) =>{
        e.preventDefault();
        // console.log(update)
        // console.log(parseInt(timeRef.current.value))
        const updatedplan = update[parseInt(timeRef.current.value)]
        updatedplan.splice(dayRef.current.value, 1,planRef.current.value)
        const sendPlans= update
        sendPlans.splice(timeRef.current.value, 1 , updatedplan)
        // console.log(sendPlans)
        API.updatePlan(sendPlans)
        .then (res=> console.log(res))
        //.then (postPlan(res))
        .catch(err=>console.log(err))
        loadPlans();
        planRef.current.value = "";
    }




    return (
        <Container>
            <Card title="Place Your Plan" id="plannerForm">
            <form 
            ref={planFormRef}
            onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Day:</label>
                    <select ref={dayRef} className="form-control" id="exampleFormControlSelect1">
                        <option value="0">Monday</option>
                        <option value="1">Tuesday</option>
                        <option value="2">Wednesday</option>
                        <option value="3">Thursday</option>
                        <option value="4">Friday</option>
                        <option value="5">Saturday</option>
                        <option value="6">Sunday</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Time:</label>
                    <select ref={timeRef} className="form-control" id="exampleFormControlSelect1">
                        <option value="0">0800</option>
                        <option value="1">0900</option>
                        <option value="2">1000</option>
                        <option value="3">1100</option>
                        <option value="4">1200</option>
                        <option value="5">1300</option>
                        <option value="6">1400</option>
                        <option value="7">1500</option>
                        <option value="8">1600</option>
                        <option value="9">1700</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea ref={planRef} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <FormButton />
            </form>
            </Card>
        </Container>
    );
}

export default PlannerForm