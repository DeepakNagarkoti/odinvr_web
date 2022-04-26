import React, { Fragment, useDebugValue } from "react";
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs';

const RatingStar = (props) =>{
    const {starRating} = props;
    return(
        <Fragment>
            {starRating === 0 &&
                <Fragment>
                    <BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 0.5 &&
                <Fragment>
                    <BsStarHalf className="text-warning"/>
                    <BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 1 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 1.5 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStarHalf className="text-warning"/>
                    <BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 2 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStar className="text-warning"/><BsStar className="text-warning"/><BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 2.5 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarHalf className="text-warning"/>
                    <BsStar className="text-warning"/><BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 3 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStar className="text-warning"/><BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 3.5 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarHalf className="text-warning" />
                    <BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 4 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStar className="text-warning"/>
                </Fragment>
            }
            {starRating === 4.5 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarHalf className="text-warning"/>
                </Fragment>
            }
            {starRating === 5 &&
                <Fragment>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                    <BsStarFill className="text-warning"/>
                </Fragment>
            }
        </Fragment>
    );
}

export default RatingStar;