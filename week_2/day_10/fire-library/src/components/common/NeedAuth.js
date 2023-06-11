import React from 'react'
import { Navigate } from 'react-router-dom';


export default function needAuth({children, user}) {
  return (
    user ? children : <Navigate to = '/login'/>
  )
}
