import React from 'react'
import {Nav} from 'react-bootstrap'
export default function SignedInLinks() {
  return <Nav className="me-auto">
  <Nav.Link href="#">Add Project</Nav.Link>
  <Nav.Link href="#">Search</Nav.Link>
  <Nav.Link href="#">View All Projects</Nav.Link>
  <Nav.Link href="#">Signout</Nav.Link>
</Nav>
}
