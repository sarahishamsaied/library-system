import React, { Fragment } from 'react'
import { useUserAuth } from '../../Context/UserAuthContext'
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../SignedOutLinks'
import { Container,Navbar } from 'react-bootstrap'

export default function NavBar() {
   let {user} = useUserAuth()
  return <Fragment>
  <Navbar bg="dark" variant="dark" className = "position-fixed navbarComp">
    <Container>
    <Navbar.Brand href="/home">Library Management System</Navbar.Brand>
    {user?<SignedInLinks/>:<SignedOutLinks/>}
    </Container>
  </Navbar>
  </Fragment>
    
}
