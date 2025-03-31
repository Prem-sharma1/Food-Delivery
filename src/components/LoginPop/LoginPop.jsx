import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPop.css'
const LoginPop = ({setShowLogin}) => {
    const[currState,setCurrState]=useState("Login")
  return (
    <div className='Login-popup'>
        <form className='Login-popup-container'>
            <div className='Login-popup-title'>
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>

        <div className='login-popup-input'>
            {currState==="Login"?<></>:
        <input type='Text'placeholder='Enter name'required/>}
        <input type='Email'placeholder='Enter Email'required/>
        <input type='password'placeholder='Password'required/>
        </div>
      
<button>{currState==="SignUp"? "Create account" :"Login"}</button>
<div className='Login-popup-condition'>
<input type='checkbox' required/>
<p>by continuing ,i agree all the term and condition and privacy policy</p>
</div>
{currState==="Login"?<p>Create a new account?<span onClick={()=>setCurrState("sign Up")}>Click here</span></p>
:<p>Already have an account ?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}


</form>
    </div>
  )
}

export default LoginPop
