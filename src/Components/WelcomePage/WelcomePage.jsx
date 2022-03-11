import React, { Fragment } from 'react'
import { Container, Row ,Col, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import * as GiIcons from 'react-icons/gi'
export default function WelcomePage() {
    const navigate = useNavigate()
  return <Fragment>
      <div className="welcomePage d-flex justify-content-center align-items-center vh-100 flex-column bg-custom">
        <h1 className='text-white mb-5 display-4'> <GiIcons.GiBookshelf/> Library Management System</h1>
        <Button className = "bg-gradient w-50 border-0 mb-4" onClick={()=>navigate("/login")}>Sign In</Button>
        <Button className = "bg-gradient w-50 border-0" onClick={()=>navigate("/signup")}>Sign Up</Button>
    </div>
  </Fragment>
}
