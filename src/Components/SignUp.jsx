import React from 'react'
import 'react-bootstrap'
import { Form , Button,Alert } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
export default function SignUp() {
    const [errorMessage,setErrorMessage] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {signUp} = useUserAuth()
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setErrorMessage("")
        try{
            await signUp(email,password)
            console.log("hello")
            navigate("/login")
        }
        catch(err){
            console.log(err)
            setErrorMessage(err.message)
        }
    }
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
        {errorMessage && <Alert variant = "danger">{errorMessage}</Alert>}
      <Form className='p-5 box bg-transparent shadow-lg border-0' onSubmit={handleSubmit}>
          <h1 className='text-white'>Sign up</h1>
          <Form.Group className = "mb-3">
              <Form.Control type = "email" placeholder='email address' onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>        
        <Form.Group className = "mb-3">
              <Form.Control type = "password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className=' bg-dark d-flex justify-content-center'>
          <Button variant="primary" type="Submit" className = "col-12 ">
              Sign up
            </Button>
          </Form.Group>
      </Form>
      <div className='box bg-transparent border-0 mt-3'>
            <p className='text-white'>Already have an account?  <span><Link to = "/login">Sign in</Link></span></p>
            
      </div>
    </div>
  )
}
