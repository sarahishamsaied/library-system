import React from 'react'
import {Nav} from 'react-bootstrap'
import { useUserAuth } from '../Context/UserAuthContext'
export default function SignedOutLinks() {
  return <Nav className="me-auto">
  <Nav.Link href="/login">Sign in</Nav.Link>
  <Nav.Link href="/signup">Register</Nav.Link>
  <Nav.Link href="#">About</Nav.Link>
</Nav>
}