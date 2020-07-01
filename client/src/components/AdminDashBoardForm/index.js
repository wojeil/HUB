import React, {useRef} from "react";
import API from "../../utils/API";
import FormButton from "../FormSubmitButton";
import Card from "../Card";
import "./style.css"


function AdminDashBoardForm({loadAnnouncements}) {


    const dashFormRef = useRef();
    const titleRef = useRef();
    const typeRef = useRef();
    const bodyRef = useRef();

    const handleSubmit = (e)=> {
        e.preventDefault();
        API.updateAnnouncement({
            title: titleRef.current.value,
            type: typeRef.current.value,
            body: bodyRef.current.value
        }).then(()=>{
            titleRef.current.value = "";
            bodyRef.current.value = "";
        })
        loadAnnouncements();
    }
   
    
    return (
        <div className="dashform">
        <Card title="Set a Goal for Your Team">
        <form
            ref={dashFormRef}
            onSubmit={handleSubmit}
            
        >
            <div className="form-group">
                <label for="exampleFormControlInput1">Title:</label>
                <input ref={titleRef} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Goal Type:</label>
                <select ref={typeRef} className="form-control" id="exampleFormControlSelect1">
                    <option>Short-Term</option>
                    <option>Long-Term</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Team Goal:</label>
                <textarea ref={bodyRef} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <FormButton />
        </form>
        </Card>
        </div>

    );

}

export default AdminDashBoardForm