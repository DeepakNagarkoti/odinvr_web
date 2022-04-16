import React, { Fragment } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../AppDetails/index.css';
import ScreenshotCard from "../ScreenshotCard";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {BiPackage} from 'react-icons/bi';

const RightCard = () =>{
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
                        <p id="description" class="right-card-text text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices in erat
                            vitae placerat. Donec dui odio, luctus sit amet aliquet eleifend, molestie eget 
                            ipsum. Integer vel feugiat mauris. Aenean in metus ut tellus imperdiet pretium.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            per inceptos himenaeos. Fusce blandit ipsum ac malesuada facilisis. 
                            Nam molestie quam tellus, ac lobortis ipsum hendrerit in. Integer ultricies
                            gravida dolor sit amet varius. Fusce maximus est in ultrices commodo. Duis
                            sit amet mi lorem. In hac habitasse platea dictumst. Praesent et ultricies
                            risus. Morbi in vulputate metus. Ut egestas orci tellus. Cras aliquam eu 
                            elit nec fermentum. Duis lectus lectus, accumsan quis odio a, ornare maximus 
                            mauris. 
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
                                <span id="star1" className="text-dark mr-4 mt-2">4&nbsp;</span>
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
                                <AiFillStar className="text-warning rating-stars"/>
                                <AiFillStar className="text-warning rating-stars"/>
                                <AiFillStar className="text-warning rating-stars"/>
                                <AiFillStar className="text-warning rating-stars"/>
                                <AiOutlineStar className="text-warning rating-stars"/>
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
                             <div className="col-4">
                                <div className="row mx-0">
                                    <div className="col-3">
                                        <BiPackage className="text-dark"/>
                                    </div>
                                    <div className="col-9">
                                        <p className="right-card-text text-dark">
                                            Published by
                                            <br/>
                                            <span className="small-text">rachitshah06@gmail.com</span>
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