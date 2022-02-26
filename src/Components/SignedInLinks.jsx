import React from 'react'
import {Nav} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext'
export default function SignedInLinks() {
    const {logout} = useUserAuth()
     const handleSignOut = async()=>{
        try{
            await logout();
            return <Navigate to ="/signup"/>
        }
        catch(err){
            console.log(err.message)
        }
    }
      return <Nav className="me-auto">
    <Nav.Link href = "/home">Home Page</Nav.Link>
  <Nav.Link href="/addBook">Add Book</Nav.Link>
  <Nav.Link href="#">Search</Nav.Link>
  <Nav.Link href="/booksTable">View All Books</Nav.Link>
  <Nav.Link href="#" onClick={handleSignOut}>Signout</Nav.Link>
</Nav>
}

