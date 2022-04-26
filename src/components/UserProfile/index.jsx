import React, { Fragment, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaUserEdit,FaBan,FaCheck} from 'react-icons/fa';
import {GiRoundStar} from 'react-icons/gi';
import avatar from '../../assets/avatar.svg';
import '../DashBoard/index.css';
import SideNav from "../SideNav";

const UserProfile = () =>{
    const [editField,setEditField] = useState("d-none");
    const [display,setDisplay] = useState("d-none");
    const [disabledField,setDisabledField] = useState("");
    const editBtnHandler = () =>{
        setDisabledField("d-none");
        setEditField("");
        setDisplay("");
    }
    const cancelBtnHandler = () =>{
        setDisabledField("");
        setEditField("d-none");
        setDisplay("d-none");
    }
    const saveBtnHandler = () =>{
        setDisabledField("");
        setEditField("d-none");
        setDisplay("d-none");
    }
    return (
        <Fragment>
            <SideNav/>
            <div className="home py-4 h-full">
                <div className="container">
                    <div className="row text-start">
                        <h4 className="mb-0">
                            User Profile
                        </h4>
                    </div>
                    <hr/>
                    <div className="card shadow">
                        <div className="row">
                            <div className="col-md-4 border-end">
                                <div className="row d-flex justify-content-center align-items-center mt-4">
                                    <img src={avatar} className="rounded-circle userImg"/>
                                </div>
                                <div className="row mx-0 d-flex justify-content-center align-items-center mt-4">
                                    <h5 className="text-center">
                                        Rachit Shah
                                    </h5>
                                </div>
                                <div className="row mx-0 d-flex justify-content-center align-items-center mt-1">
                                    <p className="text-center mb-0">24 Reviews | 30 App purchase</p>
                                    <p className="text-center">
                                        <GiRoundStar className="text-warning"/>
                                        <GiRoundStar className="text-warning"/>
                                        <GiRoundStar className="text-warning"/>
                                        <GiRoundStar className="text-warning"/>
                                        <GiRoundStar className="text-warning"/>
                                        &nbsp;21 ratings
                                    </p>
                                    <button className="btn btn-primary w-50" onClick={() => editBtnHandler()}>
                                        <FaUserEdit/>
                                        &nbsp;
                                        Edit Info
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row d-flex justify-content-end ">
                                    
                                </div>
                                <div className="row  border-bottom mt-3">
                                    <p className="text-start text-muted fw-light ">User profile</p>
                                    <div className="col-sm-5">
                                        <p className="fw-light">Email: <span className="fw-normal">&nbsp;rachitshah@gmail.com</span></p>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="fw-light">Gender: <span className="fw-normal">&nbsp;Male</span></p>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="fw-light">Phone number: <span className="fw-normal">&nbsp;1234568798</span></p>
                                    </div>
                                </div>
                                <div className={"row border-bottom mt-3 " + disabledField}>
                                    <p className="text-start text-muted fw-light ">Billing Address</p>
                                    <div className="row mx-0 mb-2">
                                        <p className="fw-light mb-2">Address line 1</p>
                                        <input className="form-control w-75" disabled id="addressLine1" value="xyz, building A "/>
                                    </div>
                                    <div className="row mx-0 mb-2">
                                        <p className="fw-light mb-2">Address line 2</p>
                                        <input className="form-control w-75" disabled id="addressLine1" value="xyz, building B "/>
                                    </div>
                                </div>
                                <div className={"row border-bottom mt-3 " + editField}>
                                    <p className="text-start text-muted fw-light ">Billing Address</p>
                                    <div className="row mx-0 mb-2">
                                        <p className="fw-light mb-2">Address line 1</p>
                                        <input className="form-control w-75"  id="addressLine1" value="xyz, building A "/>
                                    </div>
                                    <div className="row mx-0 mb-2">
                                        <p className="fw-light mb-2">Address line 2</p>
                                        <input className="form-control w-75" id="addressLine1" value="xyz, building B "/>
                                    </div>
                                </div>
                                <div className={"row border-bottom mx-0 mt-3 " + display}>
                                    <div className="col-sm-6 pb-3">
                                        <button className="btn btn-danger w-100" onClick={() => cancelBtnHandler()}>
                                            <FaBan/>
                                            &nbsp;&nbsp;Cancel
                                        </button>
                                    </div>
                                    <div className="col-sm-6 pb-3">
                                        <button className="btn btn-success w-100" onClick={() => saveBtnHandler()}>
                                            <FaCheck />
                                            &nbsp;&nbsp;Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
}

export default UserProfile;