import React, { Fragment } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../AppDetails/index.css';
import {AiFillStar} from 'react-icons/ai';
import img from '../../assets/icon.png';

const LeftCard = (props) =>{
    console.log("PROPS>>>>>>>>",props)
    const {name,subtitle,rating,star,downloadLink} = props;
    return(
        <Fragment>
            <div className="left-card">
                <div className="row d-flex justify-content-center align-items-center mt-4 pt-4">
                    <img src={img} alt={"image"} className="left-card-img rounded-3 shadow px-0" />
                </div>
                <div className="text-center mt-4">
                    <h4 id="title" className="left-card-header text-dark">{name}</h4>
                    <p id="subtitle" className="left-card-text"></p>
                </div>
                <div className="text-center mt-4">
                    <a href={downloadLink} download>
                        <button type="button" id="btnDownload"  className="btn app-btn">Download/Open</button>
                    </a>
                    <p className="small-text pt-2">+ Offers in-app purchase</p>
                </div>
                <div className="text-center mt-4">
                    <p className="small-text">
                        Play specified types of media with
                        <br/>
                        this extension for windows 10/11
                    </p>
                </div>
                <div className="text-center mt-4 mb-2">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-4 border-end border-secondary rounded-lg">
                            <span id="star" className="text-black ">{star}</span><AiFillStar className="text-warning"/>
                            <p id="star-text" className="small-text">Very Good</p>
                        </div>
                        <div className="col-4 border-start border-secondary rounded-lg">
                            <span id="totalReview">{rating}</span>
                            <p className="small-text">Ratings</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LeftCard;