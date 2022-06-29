import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const ValidationError = (props) =>{
    const {value,show} = props;
    return (
        <div >
            <p className={"mb-0 px-2 form-control bg-error " + show}>Please enter the valid {value} value</p>
        </div>
    );
}

export default ValidationError;