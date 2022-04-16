import React, { Fragment } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LeftCard from "../LeftCard";
import RightCard from "../RightCard";
import SideNav from "../SideNav";
import './index.css';

const AppDetail = () =>{
    return(
        <div className="appDetailPage">
            <SideNav />
            <div className="home">
                <div className="text">
                    <div className="row px-0">
                        <div className="col-sm-12 col-md-12 col-lg-4 px-0 app-details-card ">
                            <div className="card h-100 bg-light">
                                <LeftCard />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8 app-right-card">
                            <div>
                                <RightCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppDetail;