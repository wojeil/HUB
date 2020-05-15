import React, { useRef } from 'react';
import DashBoard from "../../components/DashBoard";
import FormButton from "../../components/FormSubmitButton";
import API from "../../utils/API"

function newPage({ addAnnouncements }) {
    
    const dashFormRef = useRef();
    const titleRef = useRef();
    const typeRef = useRef();
    const bodyRef = useRef();

    function addAnnouncements() {
        API.addAnnouncement().then(res =>
            console.log(res.data)
        ).catch(err => console.log(err));

    }
    return (


        <div className="container-fluid">
            <DashBoard />
            <hr />
            <form
                ref={dashFormRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    return addAnnouncements({
                        title: titleRef.current.value,
                        type: typeRef.current.value,
                        body: bodyRef.current.value
                    })
                }}
            >
                <div className="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input onChange={() => { }} ref={titleRef} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
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
                    <textarea onChange={() => { }} ref={bodyRef} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <FormButton />
            </form>
        </div>

    )

}

export default newPage;