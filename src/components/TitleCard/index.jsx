import React from "react";
import './index.css';

const TitleCard = () => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 px-0 app-details-card ">
            <div className="card h-100 bg-light">
                <div className="left-card">
                    <div className="row d-flex justify-content-center align-items-center mt-4 pt-4">
                        <img src="../img/icon.png" className="left-card-img rounded-lg shadow" />
                    </div>
                    <div className="text-center mt-4">
                        <h4 className="left-card-header">Stimution-app Title</h4>
                        <p className="left-card-text">Company-name</p>
                    </div>
                    <div className="text-center mt-4">
                        <button type="button" className="btn app-btn">Download/Open</button>
                        <p className="small-text">+ Offers in-app purchase</p>
                    </div>
                    <div className="text-center mt-4">
                        <p className="small-text">Play specified types of media with this extension for windows 10/11</p>
                    </div>
                    <div className="text-center mt-4">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-4 border-right">
                                <span>4.5 </span><i className='bx bxs-star rating-star'></i>
                                <p className="small-text">Very Good</p>
                            </div>
                            <div className="col-4 border-left ">
                                <span>231</span>
                                <p className="small-text">Ratings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleCard;