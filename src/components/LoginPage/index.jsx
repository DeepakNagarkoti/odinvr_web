import React, { useState } from "react";
import '../LoginPage/index.css';
import vrImage from '../../assets/vr-bg.png';
import avatar from '../../assets/avatar.png';
import {FaUser,FaLock} from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASENAME } from "../../config/constant";
import { connect } from "react-redux";
import { setRole } from "../../actions/setRole";

const LoginPage = (props) => {

  const [loginShow,setLoginShow] = useState('');
  const [signupShow,setSignupShow] = useState('d-none');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [token,setToken] = useState('');
  const navigate = useNavigate();

  const changeLogin = () =>{
    setLoginShow('d-none');
    setSignupShow('');
  }
  const changeSignin = () =>{
    setLoginShow('');
    setSignupShow('d-none');
  }

  const LoginApi = async() =>{
    var token ='';
    var orgId ='';
    try{
      await axios.post(`${URL_BASENAME}login`,{
        "username" : username,
        "password" : password
      }).then( res =>{
        var data = res.data;
        console.log("response>>>>",data);
        token = data.token;
        orgId = data.orgId;
        getRoleApi(token,orgId);
      })
    }
    catch(err){
      throw err;
    }
  }

  const getRoleApi = async(token,orgId) =>{
    const header = {
      "Authorization" : `Bearer ${token}`
    }
    try{
      await axios.post(`${URL_BASENAME}getRole?productId=d8af41d7-fdc1-11ec-b349-0691d84ddaac`,{
          "orgId" : orgId
      },{headers : header}
      ).then(res =>{
        var data = res.data;
        console.log("Response from Role>>>>>",data.role.toLowerCase());
        props.setRole(data.role.toLowerCase());
      }).then(
        navigate('/')
      )
    }
    catch(err){
      throw err;
    }
  }

  const submitHandler = () =>{
    LoginApi();
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
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FaLock/>
              </div>
              <div className="div">
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
            </div>
            <a href="" className="attr">Forgot Password?</a>
            <button className="btn-login" type="submit" onClick={()=>submitHandler()}>Login</button>
            
            <div className="row">
              <a className="pointer attr" onClick={() => changeLogin()}>Sign up now</a>
            </div>
          </div>

          {/* signup form */}

          <form>
            <div className={"form " + signupShow} id="divSignup">
              <img src={avatar}/>
              <h3 className="title">Create Account</h3>
              <div className="input-div one">
                <div className="i">
                  <FaUser/>
                </div>
                <div className="div">
                  <input 
                    type="email" 
                    id="email-signup" 
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="input-div one">
                <div className="i">
                  <FaUser/>
                </div>
                <div className="div">
                  <input 
                    type="text" 
                    id="full_name" 
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <FaLock />
                </div>
                <div className="div">
                  <input 
                    type="password" 
                    id="password-signup" 
                    placeholder="Password" 
                  />
                </div>
              </div>
              <Link to={'/userprofile'}>
                <button className="btn-login" type="submit">Register</button>
              </Link>
              
              <div className="row">
                <a className="pointer attr" onClick={() => changeSignin()}>Already have an account?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch =>({
  setRole: (val) => dispatch(setRole(val))
})
export default connect(null,mapDispatchToProps)(LoginPage);
