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
    // <div className='vh-100 row bg-custom'>
    //     {errorMessage && <Alert variant = "danger">{errorMessage}</Alert>}
    //     <div className="formContainer col-6 d-flex justify-content-center vh-100 flex-column">
    //     <h1 className='ml-5  text-white'>Library System</h1>
    //     <Form className='p-5 box bg-transparent shadow-lg border-0 vh-50' onSubmit={handleSubmit}>
    //       <h1 className='text-white'>Sign up</h1>
    //       <Form.Group className = "mb-3">
    //           <Form.Control type = "email" placeholder='email address' onChange={(e)=>setEmail(e.target.value)} />
    //       </Form.Group>        
    //     <Form.Group className = "mb-3">
    //           <Form.Control type = "password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
    //       </Form.Group>
    //       <Form.Group className=' bg-dark d-flex justify-content-center'>
    //       <Button variant="primary" type="Submit" className = "col-12 ">
    //           Sign up
    //         </Button>
    //       </Form.Group>
    //   </Form>
    //   <div className='box bg-transparent border-0 mt-3'>
    //       <p className='text-white text-center'>Already have an account?  <span><Link to = "/login">Sign in</Link></span></p>
    // </div>
    //       </div>
    //   <div className="booksPhotoContainer col-6">
    //   </div>
    // </div>
  return (
    <div className='vh-100 row bg-custom'>
        <div className="formContainer col-6 d-flex justify-content-center vh-100 flex-column">
        <h1 className='ml-5  text-white'>Library System</h1>
        <Form className='p-5 box bg-transparent shadow-lg border-0 text-white' onSubmit={handleSubmit}>
          <h1>Sign in as an admin</h1>
          {errorMessage && <Alert variant = "danger">{errorMessage}</Alert>}
          <Form.Group className = "mb-3">
              <Form.Control type = "email" placeholder='email address' onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>        
        <Form.Group className = "mb-3">
              <Form.Control type = "password" placeholder='password'onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
            <Form.Group className='row'>
            <Button variant="primary" type="Submit" className = "mb-4 mr-4 ml-2 col-3 ">
              Log In
            </Button>
            <GoogleButton className='g-btn mb-4 col-8 ' type = "dark" onClick={handleSignInWithGoogle}/>
            </Form.Group>
      </Form>
      <div className='box p-2 bg-transparent border-0 text-white'>
            <p>Don't have an account?  <span><Link to = "/signup">Sign up</Link></span></p> 
      </div>
        </div>
    <div className="booksPhotoContainer col-6">
       </div>
    </div>
  )
}
