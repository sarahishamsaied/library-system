import React, { Fragment } from 'react'
import 'react-bootstrap'
import { Form , Button,Alert } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
import bookImg from '../../src/Images/76d1fe1c819821a868160df3891b8278.jpg'
import DashboardServices from './Services/DashboardServices'
export default function SignUp() {
    const [errorMessage,setErrorMessage] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [id,setId] = useState("")
    const {signUp} = useUserAuth()
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setErrorMessage("")
        try{
            await signUp(email,password)
            getId();
            addAdmin();
            console.log("hello")
            navigate("/login")
        }
        catch(err){
            console.log(err)
            setErrorMessage(err.message)
        }
    }
    const getId = async()=>{
      const id = await DashboardServices.getDashboardId()
      setId(id)
    }
    const addAdmin = async()=>{
      const {docs} = await DashboardServices.getDashboard()
      console.log(docs[0].data())
      console.log(email)
      await DashboardServices.updateDashboard("UtPyUNC0HKJVXYsScm4z",{admins:[...docs[0].data().admins,email]})
      console.log(docs[0].data().admins)
    }
  return <Fragment>
    <div className='vh-100 row bg-custom'>
        {errorMessage && <Alert variant = "danger">{errorMessage}</Alert>}
        <div className="formContainer col-6 d-flex justify-content-center vh-100 flex-column">
        <h1 className='ml-5  text-white'>Library System</h1>
        <Form className='p-5 box bg-transparent shadow-lg border-0 vh-50' onSubmit={handleSubmit}>
          <h1 className='text-white'>Sign up as an admin</h1>
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
          <p className='text-white text-center'>Already have an account?  <span><Link to = "/login">Sign in</Link></span></p>
    </div>
          </div>
      <div className="booksPhotoContainer col-6">
      </div>
    </div>

  </Fragment>
}
