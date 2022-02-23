import React from 'react'
import { Button } from 'react-bootstrap'
import { useUserAuth } from '../Context/UserAuthContext'
import { Navigate } from 'react-router-dom'
export default function Home() {
    const {user} = useUserAuth()
    const {logout} = useUserAuth()
    const handleSignOut = async()=>{
        try{
            await logout();
            return <Navigate to ="/login"/>
        }
        catch(err){
            console.log(err.message)
        }
    }
  return (
    <div>
      <h1>Home Component, Hello {user.email}</h1>
      <Button variant = "primary" onClick={handleSignOut}>Sign Out</Button>
    </div>
  )
}
