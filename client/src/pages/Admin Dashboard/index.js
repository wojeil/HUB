import React from 'react'
import Announcements from "../../components/Announcement/index";
import FormButton from "../../components/FormSubmitButton/index";

function newPage() {

    return (

        <div className="container-fluid">
            <div className="container" id="dashBoard">
                <div className="card" id="shortTerm">
                    <Announcements title="" term="" body="" />

                </div>
                <div className="card" id="longTerm">
                    <Announcements title="" term="" body="" />

                </div>
            </div>
            <hr />
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Short-Term</option>
                        <option>Long-Term</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <FormButton />
            </form>
        </div>

    )

}

export default newPage;