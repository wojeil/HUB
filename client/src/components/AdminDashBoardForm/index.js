import React, {useRef} from "react";
import API from "../../utils/API"
import FormButton from "../FormSubmitButton"
function AdminDashBoardForm() {


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
        })
    }
   
    
    return (
        <form
            ref={dashFormRef}
            onSubmit={handleSubmit}
            
        >
            <div className="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input ref={titleRef} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select ref={typeRef} className="form-control" id="exampleFormControlSelect1">
                    <option>Short-Term</option>
                    <option>Long-Term</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea ref={bodyRef} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <FormButton />
        </form>

    );

}

export default AdminDashBoardForm