import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { useUserAuth } from '../Context/UserAuthContext'
import { Navigate,useNavigate } from 'react-router-dom'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'
import Card from './Card/Card'
import { useEffect } from 'react'
import { useState } from 'react'
import BookServices from './Services/Book.services'
export default function Home() {
  const navigate = useNavigate()
    const {user} = useUserAuth()
    const {logout} = useUserAuth()
    let [username,setUsername] = useState("")

    const formatName = (str)=>{
      if(!str)
      return
       let username = str.split("").slice(0,str.indexOf("@")).join("")
        return username[0].toUpperCase() + username.slice(1)
    }
  useEffect(()=>{
    setUsername(formatName(user.email))
  })
  const handleSignOut = async()=>{
    try{
        await logout();
    }
    catch(err){
        console.log(err.message)
    }
}
  return (
    <div className='mt-5 vh-100 d-flex align-items-start flex-column text-white text-left pt-5 '>
      <div className="heading bg-transparent bg-custom">
        <h3 >Welcome to Library Management System</h3>
        <h3>Hello, {username} </h3>
      </div>
      <div className="cardContainer mt-5">
      <div onClick={()=>navigate("/dashboard")}><Card cardTitle = "Dashboard" description="All library data" icon={<MdIcons.MdDashboard/>}/></div>
      <div onClick={()=>navigate("/cart")}><Card cardTitle = "Cart" description="All books gathered in a cart" icon={<AiIcons.AiOutlineShoppingCart/>}/></div>
      <div onClick={()=>navigate("/booksTable")}><Card cardTitle = "Books Table" description="View all books" icon={<AiIcons.AiOutlineTable/>}/></div>
      <div onClick={()=>navigate("/booksSold")}><Card cardTitle = "Purchase History" description="View all transactions" icon={<AiIcons.AiOutlineHistory/>}/></div>
      <div onClick={()=>navigate("/addBook")}><Card cardTitle = "Add Book" description="Add book to the database" icon={<BiIcons.BiAlarmAdd />}/></div>
      <div onClick={()=>navigate("/search")}><Card cardTitle = "Search" description="Search books in our database" icon={<GiIcons.GiArchiveResearch />}/></div>
      <div onClick={handleSignOut}><Card cardTitle = "Logout" description="Logout"  icon={<AiIcons.AiOutlineLogout/>}/></div>
      </div>
      {/* <Button variant = "primary" onClick={handleSignOut}>Sign Out</Button> */}
    </div>
  )
}
