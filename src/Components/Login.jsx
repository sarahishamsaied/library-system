import React from 'react'
import 'react-bootstrap'
import { Form , Button, Alert } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {signIn} = useUserAuth()
    const {googleSignIn} = useUserAuth()
    const [errorMessage,setErrorMessage] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setErrorMessage("")
        try{
            await signIn(email,password)
            console.log("success")
            navigate("/home")
        }
        catch(err){
            setErrorMessage(err.message)
        }
    }
    const handleSignInWithGoogle = async(e)=>{
        e.preventDefault()
        try{
            await googleSignIn()
            navigate("/home")
        }
        catch(err){
            console.log(err.message)
        }
    }
  return (
    <div>
      <Form className='p-5 box' onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          {errorMessage && <Alert variant = "danger">{errorMessage}</Alert>}
          <Form.Group className = "mb-3">
              <Form.Control type = "email" placeholder='email address' onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>        
        <Form.Group className = "mb-3">
              <Form.Control type = "password" placeholder='password'onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="Submit" className = "mb-3 ">
              Log In
            </Button>
      </Form>
      <div>
          <GoogleButton className='g-btn mb-4' type = "dark" onClick={handleSignInWithGoogle}/>
      </div>
      <div className='box p-3'>
            <p>Don't have an account?  <span><Link to = "/signup">Sign up</Link></span></p>
            
      </div>
    </div>
  )
}