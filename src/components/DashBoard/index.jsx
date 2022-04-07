import React, { Fragment } from "react";
import './index.css';
import SideNav from "../SideNav";
import TitleCard from "../TitleCard"
import AppCard from "../AppCard";
const Dashboard = () => {
    return (
        <Fragment>
            <SideNav />
            <div className="home h-full py-4">
                <div className="container mt-1">
                    <h4>Welcome Back,</h4>
                    <hr className="color_hr"/>
                    <div>
                        <div className="row">
                            <div className="mb-2 px-4">
                                <h5>In Store</h5>
                            </div>
                        </div>
                        <div className="row px-4">
                            <button className="btn btn-primary w-25">Upload</button> 
                        </div>
                        <div className="row previous-app mx-0 mt-4">
                            <div className="col-sm-4 mb-4">
                                <AppCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Dashboard;