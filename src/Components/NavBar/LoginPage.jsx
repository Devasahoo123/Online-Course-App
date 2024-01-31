// Login.jsx
import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import './Login.css'
const LoginPage = () => {
  const [action,setAction]=useState("Sign Up");
  return(
    <>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className='input' >
          <h1><FaRegUser/></h1>
            <input type="text"  placeholder='name'/>
          </div>
          <div className='input'>
            <h1><HiOutlineMailOpen /></h1>
            <input type="email"  placeholder='email'/>
          </div>
          <div className='input'>
           <h1><RiLockPasswordFill /></h1>
            <input type="password"  placeholder='password'/>
          </div>
        </div>
        <div className="forget-password">Forgot Password? <span> Click Here</span></div>
        <div className='submit-container'>
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{
            setAction("Sign Up")
          }}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{
            setAction("Login")
          }}>login</div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
