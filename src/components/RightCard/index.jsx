import React, { Fragment } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../AppDetails/index.css';
import ScreenshotCard from "../ScreenshotCard";
import {AiFillStar} from 'react-icons/ai';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {BiPackage} from 'react-icons/bi';
import RatingStar from "../RatingStar";

const RightCard = (props) =>{
    const {description,star,publisher} = props;
    const starCount = parseFloat(star);
    return (
        <Fragment>
            <div className="row mx-0 mb-2">
                <div className="card w-100 px-0">
                    <div className="card-header">
                        <p className="right-card-header mb-0">
                            Screenshots
                        </p>
                    </div>
                    <div className="card-body">
                        <ScreenshotCard />
                    </div>
                </div>
            </div>
            <div className="row mx-0 mb-2">
                <div className="card w-100 px-0">
                    <div className="card-header">
                        <p className="right-card-header mb-0">
                            Description
                        </p>
                    </div>
                    <div className="card-body ">
                        <p id="description" className="right-card-text text-secondary">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mx-0 mb-2">
                <div className="card w-100 px-0">
                    <div className="card-header">
                        <p className="right-card-header mb-0">
                            Rating and Reviews
                        </p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3 text-center">
                                <span id="star1" className="text-dark mr-4 mt-2">{star}&nbsp;</span>
                                <AiFillStar className="text-warning "/>
                                <p></p>
                            </div>
                        </div>
                        <div className="row mx-4">
                            <button type="button" className="btn app-btn w-25">Rate and review</button>
                        </div>
                        <div className="row mx-4 mt-4">
                            <p className="mb-0 review-header text-dark px-0">
                                Offline
                                <br/>
                                <RatingStar starRating={starCount}/>
                            </p>
                            <p className="small-text px-0 text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error 
                                veritatis est labore iusto nisi consequatur, at, 
                                odit nostrum delectus aut officia sequi libero sunt sit doloribus cupiditate ea non?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-0 mb-2">
                <div className="card w-100 px-0">
                    <div className="card-header">
                        <p className="right-card-header mb-0">
                            System Requirement
                        </p>
                    </div>
                    <div className="card-body">
                        <p className="right-card-text text-dark">
                            <BsFillPatchCheckFill className="text-success"/>
                            <span>
                                &nbsp;This product should work on your device.Items with a checkmark 
                                meet the system requirements.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mx-0 mb-2">
                <div className="card w-100 px-0">
                    <div className="card-header">
                        <p className="right-card-header mb-0">
                            Addition Information
                        </p>
                    </div>
                    <div className="card-body">
                         <div className="row">
                             <div className="col-6">
                                <div className="row mx-0">
                                    <div className="col-3">
                                        <BiPackage className="text-dark"/>
                                    </div>
                                    <div className="col-9">
                                        <p className="right-card-text text-dark">
                                            Published by
                                            <br/>
                                            <span className="small-text">{publisher}</span>
                                        </p>
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

export default RightCard;