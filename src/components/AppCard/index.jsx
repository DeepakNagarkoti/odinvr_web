import React, { Fragment } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../SideNav/index.css';
import {BsStarFill, BsStarHalf} from 'react-icons/bs';
import imgLogo from '../../assets/Screenshot.png';

const AppCard = () =>{
    return(
        <Fragment>
            <div className="card w-auto">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-6">
                            <img className="card-img-top" src={imgLogo} alt={"imgLogo"} />
                        </div>
                        <div className="col-sm-12 col-6 d-md-none previous-app-text">
                            <div className="row d-block">
                                <h5 className="card-title stimulation-title text-light-50 pt-3">CSIR</h5>
                                <h6 className="card-subtitle stimulation-subtitle text-light-50 text-muted ">By JendaMark</h6>
                            </div>
                            <div className="row">
                                <div className="previous-app-text-md">
                                    <p className="small-text mt-2">
                                        <BsStarFill className="text-warning"/>
                                        <BsStarFill className="text-warning"/>
                                        <BsStarFill className="text-warning"/>
                                        <BsStarFill className="text-warning"/>
                                        <BsStarHalf className="text-warning"/>
                                        <br/>
                                        <span className="text-muted" >240 Reviews</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-none d-md-flex">
                        <div className="previous-app-text-md mx-3">
                            <h5 className="card-title previous-stimulation-title text-light-50 pt-3">
                                CSIR
                            </h5>
                            <h6 className="card-subtitle previous--stimulation-subtitle text-light-50 text-muted ">
                                By JendaMark
                            </h6>
                        </div>
                    </div>
                    <div className="row d-none d-md-flex">
                        <div className="previous-app-text-md mx-3">
                            <p className="small-text mt-2">
                                <BsStarFill className="text-warning"/>
                                <BsStarFill className="text-warning"/>
                                <BsStarFill className="text-warning"/>
                                <BsStarFill className="text-warning"/>
                                <BsStarHalf className="text-warning"/>
                                <br/>
                                <span className="text-muted" >240 Reviews</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AppCard;