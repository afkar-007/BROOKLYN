import React, { useState } from 'react'
import './LoginFolder/Login.css';
import Pawimage from './assets/LoginPawImg.png'
import { useNavigate } from 'react-router-dom';

function Login() {
  
const Navigate=useNavigate()

const [name,setName]         =   useState("")
const [password,setpassword] =   useState("")
const [error,setError]       =   useState("")
 
const userPass="3547"


function Login(e){
e.preventDefault()

if(name.length<3){
  setError("Enter a valid name")
  return
}

if(password===userPass){
  setError("")
  Navigate('/home')
  return
}
else{
   setError("Enter a valid Password")
}

                  }





  return (
    <>


<div className='Login-Body'>
  
    <img src={Pawimage} alt="" className='login-logo '/>
    <h1 className='premium-heading '>BROOKLYN</h1>


   <form action="" onSubmit={(e)=>{Login(e)}}>
     <input type="text" className='dark-premium-input'  placeholder='name' onChange={(e)=>{setName(e.target.value)}} />
       <br/>
        <p className='error'>{error}</p>
        <input type="text" className='dark-premium-input2' placeholder='password' onChange={(e)=>{setpassword(e.target.value)}}/>
      <br/>
     <button  className='login-btn' type="submit"> login</button>
  </form>
   


</div>
    
    </>
  )
}

export default Login