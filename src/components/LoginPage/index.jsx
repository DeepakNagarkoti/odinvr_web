import React, { useState } from "react";
import '../LoginPage/index.css';
import vrImage from '../../assets/vr-bg.png';
import avatar from '../../assets/avatar.svg';
import {FaUser,FaLock} from 'react-icons/fa';

const LoginPage = () => {

  const [loginShow,setLoginShow] = useState('');
  const [signupShow,setSignupShow] = useState('d-none');

  const changeLogin = () =>{
    if(loginShow === ''){
      setLoginShow('d-none');
      setSignupShow('');
    }
  }
  return (
    <div>
      <div className="content">
        <div className="img-login">
          <img src={vrImage} className="w-100" />
        </div>
        <div className="login-content">
          <div className={"form " + loginShow} id="divLogin">
            <img src={avatar}/>
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <FaUser/>
              </div>
              <div className="div">
                <input type="email" id="email" placeholder="Username" />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FaLock/>
              </div>
              <div className="div">
                <input type="password" id="password" placeholder="Password" />
              </div>
            </div>
            <a href="" className="attr">Forgot Password?</a>

            <button className="btn-login" type="submit">Login</button>
            <div className="row">
              <a className="pointer attr" onClick={() => changeLogin()}>Sign up now</a>
            </div>
          </div>

          {/* signup form */}


          <div className={"form " + signupShow} id="divSignup">
            <img src={avatar}/>
            <h3 className="title">Create Account</h3>
            <div className="input-div one">
              <div className="i">
                <FaUser/>
              </div>
              <div className="div">
                <input type="email" id="email-signup" placeholder="Email"/>
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <FaUser/>
              </div>
              <div className="div">
                <input type="text" id="full_name" placeholder="Name"/>
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FaLock />
              </div>
              <div className="div">
                <input type="password" id="password-signup" placeholder="Password" />
              </div>
            </div>

            <button className="btn-login" type="submit">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
