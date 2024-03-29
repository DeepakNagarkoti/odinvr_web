import React, { Fragment, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../SideNav/index.css';
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';
import imgLogo from '../../assets/Screenshot.png';
import RatingStar from "../RatingStar";

const AppCard = (props) =>{

    const {title,subtitle,stars,reviews} = props;
    var starCount = parseFloat(stars);
    
    return(
        <Fragment>
            <div className="card w-auto cursor" >
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-6">
                            <img className="card-img-top" src={imgLogo} alt={"imgLogo"} />
                        </div>
                        <div className="col-sm-12 col-6 d-md-none previous-app-text">
                            <div className="row d-block">
                                <h5 className="card-title stimulation-title text-light-50 pt-3">{title}</h5>
                                <h6 className="card-subtitle stimulation-subtitle text-light-50 text-muted ">{subtitle}</h6>
                            </div>
                            <div className="row">
                                <div className="previous-app-text-md">
                                    <p className="small-text mt-2">
                                        <RatingStar starRating={starCount}/>
                                        <br/>
                                        <span className="text-muted" >{reviews + " Reviews"}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-none d-md-flex">
                        <div className="previous-app-text-md mx-3">
                            <h5 className="card-title previous-stimulation-title text-light-50 pt-3">
                                {title}
                            </h5>
                            <h6 className="card-subtitle previous--stimulation-subtitle text-light-50 text-muted ">
                                {subtitle}
                            </h6>
                        </div>
                    </div>
                    <div className="row d-none d-md-flex">
                        <div className="previous-app-text-md mx-3">
                            <p className="small-text mt-2">
                                <RatingStar starRating={starCount}/>
                                <br/>
                                <span className="text-muted" >{reviews + " Reviews"}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
}

export default AppCard;