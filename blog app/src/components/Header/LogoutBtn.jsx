import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler= () =>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <button className='inLine-bock px-6 py-2 duration-200 hover:bg-green-100 rounded-full'>
      Logout 
    </button>
  )
}

export default LogoutBtn
