import React, {useState} from "react";
import './index.css';
import { Icon } from '@iconify/react';

const SideNav = () => {
const [buttonClick, setButtonClick] = useState("true"); 
const [navPos, setNavPos] = useState("open");

const changeNavState = () => {
    if(buttonClick == true) {
        setNavPos("close")
        setButtonClick(false)
    } else {
        setNavPos("open")
        setButtonClick(true)
    }
}

  return (
    <div class="dark">
      <nav class={`sidebar ${ navPos }`}>
      <div>
          <div class="image-text">
              <span class="image">
                  <img src="../../assets/jendamark.png" width={50} height={50} alt="" />
              </span>

              <div class="text logo-text">
                  <span class="name">Jendamark</span>
                  <span class="profession">VR Stimulation</span>
              </div>
          </div>
          <a href="#" class="active" onClick={()=> {changeNavState()}}>
            <Icon icon="bx:chevron-right"/>
          </a>
      </div>

      <div class="menu-bar">
          <div class="menu">

              <ul class="menu_links">
                  <li class="nav_link ">
                      <a href="#" class="active">
                            <Icon class= "home-icon" icon="bx:home-alt" />
                          {/* <i class='bx bx-home-alt icon' ></i> */}
                          <span class="text nav-text">Dashboard</span>
                      </a>
                  </li>

              </ul>
          </div>

          <div class="bottom-content">
              <li class="">
                  <a href="#">
                      <i class='bx bx-log-out icon' ></i>
                      <span class="text nav-text">Logout</span>
                  </a>
              </li>
          </div>
      </div>

    </nav>
    </div>
  );
}

export default SideNav;