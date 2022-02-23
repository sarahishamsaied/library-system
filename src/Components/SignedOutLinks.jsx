import React from 'react'
import {Nav} from 'react-bootstrap'
export default function SignedOutLinks() {
  return <Nav className="me-auto">
  <Nav.Link href="#">Sign in</Nav.Link>
  <Nav.Link href="#">Register</Nav.Link>
  <Nav.Link href="#">About</Nav.Link>
</Nav>
}