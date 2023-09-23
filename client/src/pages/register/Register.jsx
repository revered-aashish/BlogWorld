import  './register.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
function Register() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const handelSubmit=async(e)=>{
    e.preventDefault();
    setError(false);
    try{
     const res= await axios.post("/auth/register",{
       username,
       email,
       password
     });
     res.data && window.location.replace("/login");
      //setError(true);
    }catch(err){
      setError(true);
    }
    
  }
  return (
    <div className='register'>
    <span className="registerTitle">Register</span>
     <form  className="registerForm" onSubmit={handelSubmit}>
         <label >Username</label>
         <input 
          type='text' 
          className='registerInput'
          placeholder='Enter Your username...'
            onChange={e=>setUsername(e.target.value)}
          />
         <label >Email</label>
         <input 
         type='text'
          className='registerInput'
           placeholder='Enter Your email...'
           onChange={e=>setEmail(e.target.value)}
           />
         <label>Password</label>
         <input 
         type='password'
          className='registerInput'
           placeholder='Enter your password...'
           onChange={e=>setPassword(e.target.value)}             
           />
         <button className="registerButton" type="submit">Register</button>
     </form>
     <button className="registerLoginButton">Login</button>
   {error && <span style={{color:"red",marginTop:"10px"}}> something went wrong!</span>}
    </div>
  )
}

export default Register