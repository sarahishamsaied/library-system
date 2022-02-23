import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext'

export default function ProtectedRoute({children}) {
    let {user} = useUserAuth()
    console.log("protected route",user)
    if(!user)
    return <Navigate to={"/"}/>
    else
    return children
}
