import React, { useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";
import ValidationError from "../ValidationError";
import useFormInput from "../../hooks/formInput";

const UploadModal = (props) =>{

    const {modalShow,modalShowCallBack,heading} = props;
    const [titleErrorShow,setTitleErrorShow] = useState('d-none');
    const [descriptionErrorShow,setDescriptionErrorShow] = useState('d-none');

    const {
        value: enteredTitle,
        IsValid: titleInputIsValid,
        valueChangeHandler: TitleChangeHandler,
        reset: resetTitleInput
    } = useFormInput((value)=> value.trim() !== '');

    const {
        value: enteredDescription,
        IsValid: descriptionInputIsValid,
        valueChangeHandler: DescriptionChangeHandler,
        reset: resetDescriptionInput
    } = useFormInput((value) => value.trim() !== '');

    const formSubmission = (event) =>{
        event.preventDefault();
        //console.log('clicked '+ enteredTitle + ' ' + enteredDescription);
        
        if(enteredTitle === '' || enteredDescription === ''){
            if(enteredTitle === '')
                setTitleErrorShow('');
            else
                setTitleErrorShow('d-none');
            if(enteredDescription === '')
                setDescriptionErrorShow('');
            else
                setDescriptionErrorShow('d-none');
            return;
        }
            
        console.log(enteredTitle + ' ' + enteredDescription);
        resetTitleInput();
        setTitleErrorShow('d-none');
        resetDescriptionInput();
        setDescriptionErrorShow('d-none');
        modalShowCallBack();
    }

    return (
        <Modal show={modalShow} onHide={modalShowCallBack} className="my-auto margin-top">
        <Modal.Header closeButton>
            <Modal.Title className="text-center">
                <h4>{heading}</h4>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form >
                <div className="form-group mb-3">
                    <label className="mb-2">Title<span className="text-danger">*</span></label>
                    <ValidationError value={"title"} show={titleErrorShow}/>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="txtTitle" 
                        placeholder="Enter Title" 
                        onChange={TitleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Description<span className="text-danger">*</span></label>
                    <ValidationError value={"description"} show={descriptionErrorShow}/>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="txtDescription" 
                        placeholder="Description" 
                        onChange={DescriptionChangeHandler}
                        value={enteredDescription}
                    />
                </div> 
                <div className="form-group mb-3 d-block">
                    <label className="mb-2">Category</label>
                    <select className="form-select" id="drpCategory">
                        <option selected="">Select Category</option>
                        <option value="Training">Training</option>
                        <option value="Game">Game</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Upload File</label>
                    <input type="file" className="form-control" id="uplSimFile" accept=".zip,.rar,.7zip" />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal" onClick={modalShowCallBack}>Close</button>
            {/* <button type="submit" className="btn btn-primary" onClick={modalShowCallBack}>Save </button> */}
            <button type="submit" className="btn btn-primary" onClick={formSubmission} >Save </button>
        </Modal.Footer>
    </Modal>
    );
}

export default UploadModal;