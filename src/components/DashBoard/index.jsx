import React, { Fragment,useState, useEffect } from "react";
import { connect } from "react-redux";
import { getappData } from "../../actions/getAppData";

import './index.css';
import SideNav from "../SideNav";
import AppCard from "../AppCard";
import UploadModal from "../UploadModal";
import { Link } from "react-router-dom";
import dummy from '../../DummyData/dummyData.json';
import axios from "axios";
import { URL_BASENAME } from "../../config/constant";
const Dashboard = (props) => {
    //let match = useRouteMatch();
    const [modalShow,setModalShow] = useState(false);
    const [simData,setSimData] = useState([]);
    const downloadLink = "https://odinvr-sim-data.s3.eu-west-2.amazonaws.com/App/JendaMark-Sim+(5).exe";
    
    const modalShowCallBack = () => {
        setModalShow(false)
    }

    const linkClicked = (val) => {
        props.getappData(val)
    }

    const fetchSimApi = async() =>{
        try{
            await axios.get(`${URL_BASENAME}getSim`).then(
                res =>{
                    var data = res.data;
                    console.log("DATA>>>",data);
                    setSimData(data);
                }
            )
        }
        catch(err){
            throw err;
        }
    }

    useEffect(()=>{
        fetchSimApi();
    },[]);

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
                        <div className="row mx-0">
                            <div className="col-sm-4">
                                <button className="btn app-btn w-75" onClick={ () => setModalShow(true)}>Upload</button> 
                            </div>
                            <div className="col-sm-4">
                                <a href={downloadLink} download>
                                    <button className="btn app-btn w-75">Download App</button> 
                                </a>
                            </div>
                            
                        </div>
                        <div className="row previous-app mx-0 mt-4">
                            {

                                simData.map((val,index) =>{
                                    return(
                                        <div key={index} className="col-sm-4 mb-4">
                                            <Link to={`/appDetails`} onClick={() => linkClicked(val)}>
                                                <AppCard title={val.Title} subtitle={val.subtitle} stars={val.star.toString()} reviews={val.totalReview}/>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="col-sm-4 mb-4">
                                <Link to={`/appDetails`}>
                                    <AppCard />
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <UploadModal modalShow={modalShow} heading="Upload Simulation" modalShowCallBack={modalShowCallBack}/>
        </Fragment>
    );
}

  const mapDispatchToProps = dispatch => ({
    getappData: (val) => dispatch(getappData(val))
  });
  
export default connect(null, mapDispatchToProps)(Dashboard);
