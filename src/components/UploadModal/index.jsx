import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";

const UploadModal = (props) =>{

    const {modalShow,modalShowCallBack,heading} = props;

    return (
        <Modal show={modalShow} onHide={modalShowCallBack} className="my-auto margin-top">
        <Modal.Header closeButton>
            <Modal.Title className="text-center">
                <h4>{heading}</h4>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-group mb-3">
                    <label for="txtTitle" className="mb-2">Title</label>
                    <input type="text" className="form-control" id="txtTitle" placeholder="Enter Title"/>
                </div>
                <div className="form-group mb-3">
                    <label for="txtDescription" className="mb-2">Description</label>
                    <input type="text" className="form-control" id="txtDescription" placeholder="Description"/>
                </div> 
                <div className="form-group mb-3 d-block">
                    <label for="drpCategory" className="mb-2">Category</label>
                    <select className="form-select" id="drpCategory">
                        <option selected="">Select Category</option>
                        <option value="Training">Training</option>
                        <option value="Game">Game</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label for="uplSimFile" className="mb-2">Upload File</label>
                    <input type="file" className="form-control" id="uplSimFile" />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal" onClick={modalShowCallBack}>Close</button>
            <button className="btn btn-primary" type="button" onClick={modalShowCallBack}>Save </button>
        </Modal.Footer>
    </Modal>
    );
}

export default UploadModal;