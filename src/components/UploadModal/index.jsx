import React, { useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";
import ValidationError from "../ValidationError";
import useFormInput from "../../hooks/formInput";
import ReactS3Client from 'react-aws-s3';
import S3 from 'react-aws-s3';
import {Buffer} from 'buffer';
import { URL_BASENAME } from "../../config/constant";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import moment from "moment";

Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;

const UploadModal = (props) =>{

    const {modalShow,modalShowCallBack,heading} = props;
    const [titleErrorShow,setTitleErrorShow] = useState('d-none');
    const [descriptionErrorShow,setDescriptionErrorShow] = useState('d-none');
    const [category,setCategory] = useState([]);
    const [tempFiles,setTempFiles] = useState([]);
    const [type,setType] = useState("");
    
    const guid = uuidv4();
    const date = new Date();

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

    const config ={
        bucketName : "usertempdocs",
        dirName : `temp/Simulations/files`,
        region : 'ap-south-1',
        accessKeyId : 'AKIASOCJUAB3GPDDWHVH',
        secretAccessKey : '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'
    }

    const ReactS3Client = new S3(config);

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
        console.log(type);
        console.log(enteredTitle + ' ' + enteredDescription);
        uploadFileAws();
        resetTitleInput();
        setTitleErrorShow('d-none');
        resetDescriptionInput();
        setDescriptionErrorShow('d-none');
        setType("")
        modalShowCallBack();
    }

    function handleChange(event) {
        console.log(event.target.files[0]);
        setTempFiles(event.target.files[0]);
    }

    const uploadFileAws= () =>{
        if(tempFiles){
            console.log("Inside")
            const file = tempFiles;
            const fileName = tempFiles.name;
            try{
                ReactS3Client.uploadFile(file,fileName).then(data =>{
                    console.log("inside reactS3Client",data);
                    if(data.status === 204){
                        console.log("success");
                        setSimApi(data.location);
                    }
                    else{
                        console.log("failed");
                    }
                });
            }
            catch(err){
                console.log("Error")
                throw err;
            }
        }
        console.log(tempFiles.name)
    }
    
    const setSimApi = async(url) =>{
        var today = moment(date).format('YYYY-MM-DD HH:mm:ss')
        try{
            await axios.post(`${URL_BASENAME}setSim`,{
                "Id" : guid,
                "title" : enteredTitle,
                "description" : enteredDescription,
                "typeId" : type,
                "url" : url,
                "isActive" : 1,
                "date" : today
            }).then(console.log("Successfully added to the db"));
        }
        catch(err){
            throw err;
        }
    }

    const getCategoryAPI = async() =>{
        try{
            await axios.get(`${URL_BASENAME}getCategory`)
                    .then(res =>{
                        var data = res.data;
                        console.log("data",data)
                        setCategory(data);
                    })
        }
        catch(err){
            throw err;
        }
    }

    useEffect(()=>{
        getCategoryAPI();
    },[])

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
                    <select value={type} onChange={(e)=>{setType(e.target.value)}} className="form-select" id="drpCategory">
                        <option>Select Category</option>
                        {
                            category.map((val,index)=>{
                                return(
                                    <option className="form-control" value={val.Id} key={index}>{val.Type}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Upload File</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        id="uplSimFile" 
                        accept=".zip,.rar,.7zip"
                        onChange={handleChange} />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal" onClick={modalShowCallBack}>Close</button>
            {/* <button type="submit" className="btn btn-primary" onClick={modalShowCallBack}>Save </button> */}
            <button type="submit" className="btn app-btn" onClick={formSubmission} >Save </button>
        </Modal.Footer>
    </Modal>
    );
}

export default UploadModal;