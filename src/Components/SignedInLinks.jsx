import React from 'react'
import {Nav} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
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
    <Nav.Link href = "/home"><AiIcons.AiFillHome/> Home</Nav.Link>
  <Nav.Link href="/addBook"><GiIcons.GiWhiteBook/> Add</Nav.Link>
  <Nav.Link href="/search"><AiIcons.AiOutlineSearch/> Search</Nav.Link>
  <Nav.Link href="/booksTable"><AiIcons.AiFillRead/> View Books</Nav.Link>
  <Nav.Link href="/cart"><AiIcons.AiOutlineShoppingCart/> Cart</Nav.Link>
  <Nav.Link href="#" onClick={handleSignOut}><AiIcons.AiOutlineLogout/> Signout</Nav.Link>
</Nav>
}

