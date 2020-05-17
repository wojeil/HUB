import React,{useRef} from "react"
import FormButton from "../FormSubmitButton"
import { Container } from "../Grid"
import Card from "../Card"
import "./style.css"
import API from "../../utils/API"


function PlannerForm({loadPlans}) {
    
    const planFormRef= useRef();
    const dayRef= useRef();
    const timeRef= useRef();
    const planRef= useRef();

    const handleSubmit=(e) =>{
        e.preventDefault();
        API.addPlan({
            day: dayRef.current.value,
            time: timeRef.current.value,
            plan: planRef.current.value

        })
        .then (res=> console.log(res))
        //.then (postPlan(res))
        .catch(err=>console.log(err))
        loadPlans();
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
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Time:</label>
                    <select ref={timeRef} className="form-control" id="exampleFormControlSelect1">
                        <option>0800</option>
                        <option>0900</option>
                        <option>1000</option>
                        <option>1100</option>
                        <option>1200</option>
                        <option>1300</option>
                        <option>1400</option>
                        <option>1500</option>
                        <option>1600</option>
                        <option>1700</option>
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