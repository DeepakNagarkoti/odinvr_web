import React, {useState} from "react";
import './index.css';
import {FaChevronRight} from "react-icons/fa";
import {AiOutlineDashboard} from 'react-icons/ai';
import {MdLogout} from 'react-icons/md';
import logo from '../../assets/jendamark.png';

const SideNav = () => {
    const [close,setClose] = useState("close");
    const toggleBtn = () =>{
        if (close === ""){
            setClose("close");
        } 
        else setClose("");
    };
    return(
        <nav className={'sidebar ' + close}>
            <header>
                <div className='image-text'>
                    <span className='image'>
                        <img src={logo} alt={"logo"}></img>
                        {/* <img src="../../src/assets/jendamark.png"></img> */}
                    </span>
                    <div className='text logo-text'>
                        <span className='name'>
                            JendaMark
                        </span>
                        <span className='profession'>
                            VR Application
                        </span>
                    </div>
                </div>
                <FaChevronRight className='toggle toggle-icon' onClick = {() => toggleBtn()}/>
            </header>
            <div className='menu-bar'>
                <div className='menu'>
                    <ul className='menu_links'>
                        <li className='nav_link'>
                            <a href='#' className="active">
                                <AiOutlineDashboard className='icon'/>
                                <span className='text nav-text'>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-content">
                    <li>
                        <a href='#'>
                            <MdLogout className='icon'/>
                            <span className='text nav-text'>Logout</span>
                        </a>
                    </li>
                </div>
            </div>
        </nav>
    );
}

export default SideNav;