import React, { Fragment } from 'react'
import { useUserAuth } from '../../Context/UserAuthContext'
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../SignedOutLinks'
import { Container,Navbar } from 'react-bootstrap'
export default function NavBar() {
    console.log("nav")
    const CheckSignedIn = ()=>{
        let {user} = useUserAuth()
        console.log("user is")
        console.log("user is ",user)
        if(user)
        {
            console.log("user is signed in")
            return true;

        }
        else{
            console.log("users signed out")
            return false;

        }
    }
  return <Fragment>
  <Navbar bg="dark" variant="dark" className = "w-100">
    <Container>
    <Navbar.Brand href="#home">Projectify</Navbar.Brand>
    {CheckSignedIn()?<SignedInLinks/>:<SignedOutLinks/>}
    </Container>
  </Navbar>
  </Fragment>
    
}
