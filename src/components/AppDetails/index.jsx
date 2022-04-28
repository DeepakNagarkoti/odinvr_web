import React, { Fragment } from "react";
import { connect } from "react-redux";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LeftCard from "../LeftCard";
import RightCard from "../RightCard";
import SideNav from "../SideNav";
import './index.css';

const AppDetail = (props) =>{
    console.log('props>>>>>>>>', props.appData.data)
    
    return(
        <div className="appDetailPage">
            <SideNav />
            <div className="home">
                <div className="text">
                    <div className="row px-0">
                        <div className="col-sm-12 col-md-12 col-lg-4 px-0 app-details-card ">
                            <div className="card h-100 bg-light">
                                <LeftCard 
                                    name={props.appData.data.fields.Title.stringValue}
                                    star={props.appData.data.fields.star.stringValue}
                                    rating={props.appData.data.fields.totalReview.stringValue}
                                    downloadLink={props.appData.data.fields.downloadLink.stringValue}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8 app-right-card">
                            <div>
                                <RightCard 
                                    description={props.appData.data.fields.Description.stringValue}
                                    star={props.appData.data.fields.star.stringValue}
                                    publisher={props.appData.data.fields.PublishedBy.stringValue}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state
  });

export default connect(mapStateToProps, null)(AppDetail);