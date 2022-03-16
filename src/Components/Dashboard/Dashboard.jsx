import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Card/Card'
import DashboardServices from '../Services/DashboardServices'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import * as RiIcons from 'react-icons/ri'

export default function Dashboard() {
  let [totalBalance,setTotalBalance] = useState(0)
  let [dashboardId,setDashboardId] = useState("")
  let [sellsLength,setSellsLength] = useState(0)
  let [adminsNumber,setAdminsNumber] = useState(0)
  let navigate = useNavigate()
  const [sells,setSells] = useState([])
  const [isLoaded,setIsLoaded] = useState(false)

  async function  getDataFromDashboard(){
    let {docs} = await DashboardServices.getDashboard()
    console.log(docs[0].data())
    setDashboardId(docs[0].id)
    setSells(docs[0].data().sells)
    console.log(sells)
    console.log(totalBalance)
    // setTotalBalance(docs[0].data().totalBalance)
    setSellsLength(docs[0].data().sells.length)
    setAdminsNumber(docs[0].data().admins.length)
    console.log(docs[0].data().admins)
  }

  const getTotalBalance = ()=>{
    setIsLoaded(true)
    let sum = 0;
    sells.map((val)=>{
      return val.productsBought.map((element)=>{
        sum+=Number(element.price)
      })
    })
    return sum
  }
  useEffect(()=>{
    getDataFromDashboard();
  },[])
  useEffect(()=>{
    setTotalBalance(getTotalBalance)
  })
     return( !isLoaded?<LoadingScreen/>:<Fragment>
      <div className="conatiner vh-100 d-flex justify-content-flex-start mt-5 text-white flex-column">
        <div className='DashboardHeader d-flex justify-content-between heading mt-5 px-5'>
        <h1 className=''>Admin Dashboard </h1>
        <h1 className='ml-auto'>Total Balance: {totalBalance}$</h1>
        </div>
      <div className="cards d-flex">
      <div onClick={()=>navigate("/booksSold")}><Card cardTitle = "Books Sold" description={`Sells: ${sellsLength}`} icon = {<MdIcons.MdAttachMoney/>}/></div>
      <div onClick={()=>navigate("/admins")}><Card cardTitle = "Admins" description={`Admins: ${adminsNumber}`} icon = {<FiIcons.FiUsers/>}/></div>
      <Card cardTitle = "Books Retrieved" description={"Books: 0"} icon = {<RiIcons.RiExchangeLine/>}/>
      <Card cardTitle="Popular Books" description={"Most bought books"} icon = {<MdIcons.MdTrendingUp/>}/>
      </div>
      </div>
  </Fragment>);

  
}
