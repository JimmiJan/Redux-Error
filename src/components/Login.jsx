import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../store/action/authaction'
import Dashboard from './dashboard'
// import dashboard from './dashboard'

const Login = () => {
  const[Name,setName]=useState("")

  const[Email,setEmail]=useState("")
  const[ password,setpassword]=useState("")
  const dispatch = useDispatch()
 

  const loginHandale =()=>{
    console.log(Email,password , Name)
    dispatch(loginAction({Email,password,Name}))
  }
  return (
    <div>
      <div>
          Login Form
      </div>
      <div>
          <input type="text" placeholder='Enter Your Name'  onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div>
          <input type="email" placeholder='Enter Your Email'  onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
          <input type="password" placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)} />
      </div>
      <div>
        <button onClick={loginHandale}>Login</button>
      </div>
      <Dashboard />
    </div>
  )
}

export default Login
