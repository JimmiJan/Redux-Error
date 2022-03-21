import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../store/action/authaction'

const Dashboard = () => {
    const {userName,userEmail,userPassword,} = useSelector((state)=>state.loginReducer)
    console.log(userEmail,userPassword,userName)
    const dispatch =useDispatch()
   const  LogOut =()=>{
    dispatch(logoutAction())
   }
  return (
    <div>
        DAshboard
        <p>{userName &&` Name : ${userName}`}</p>
        <p>{userPassword && `Password : ${userPassword}`}</p>     
        <p>{` Email : ${userEmail}`}</p>
       <div>
           <button onClick={LogOut}>LogOut</button>
       </div>

    </div>
  )
}

export default Dashboard
