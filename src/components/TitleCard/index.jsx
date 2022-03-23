import React from "react";
import './index.css';

const TitleCard = () => {
    return (
        <div class="col-sm-12 col-md-12 col-lg-4 px-0 app-details-card ">
            <div class="card h-100 bg-light">
                <div class="left-card">
                    <div class="row d-flex justify-content-center align-items-center mt-4 pt-4">
                        <img src="../img/icon.png" class="left-card-img rounded-lg shadow" />
                    </div>
                    <div class="text-center mt-4">
                        <h4 class="left-card-header">Stimution-app Title</h4>
                        <p class="left-card-text">Company-name</p>
                    </div>
                    <div class="text-center mt-4">
                        <button type="button" class="btn app-btn">Download/Open</button>
                        <p class="small-text">+ Offers in-app purchase</p>
                    </div>
                    <div class="text-center mt-4">
                        <p class="small-text">Play specified types of media with this extension for windows 10/11</p>
                    </div>
                    <div class="text-center mt-4">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-4 border-right">
                                <span>4.5 </span><i class='bx bxs-star rating-star'></i>
                                <p class="small-text">Very Good</p>
                            </div>
                            <div class="col-4 border-left ">
                                <span>231</span>
                                <p class="small-text">Ratings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleCard;