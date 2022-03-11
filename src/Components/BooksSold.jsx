import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import * as BiIcons from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import DashboardServices from './Services/DashboardServices'
export default function BooksSold() {
    const navigate = useNavigate()
    const [sells,setSells] = useState([])
    const [history,setHistory] = useState([])
    const [dashboardId,setDashboardId] = useState("")
    const getSoldBooks = async()=>{
        const {docs} = await DashboardServices.getDashboard();
        console.log("sells");
        setDashboardId(docs[0].id)
        console.log(dashboardId)
        setSells(docs[0].data().sells);
        console.log(sells)
        setHistory(docs[0].data().sells)
        console.log(history)
    }
    const clearHistoryHandler = async()=>{
        await DashboardServices.updateDashboard(dashboardId,{sells:[]})
        console.log(sells)
        getSoldBooks()

    }
    useEffect(()=>{
        getSoldBooks()
    },[])
  return <div className="booksTable">
  <h2 className='text-white'>Purchase History</h2>
  <Button variant = "danger mb-3" onClick={clearHistoryHandler}>Clear History</Button>
  <Table  className = "bg-custom text-white ">
      <thead>
          <tr>
              <th>#</th>
              <th>Buyer Name</th>
              <th>Purchase Details</th>
          </tr>
      </thead>
      <tbody>
          {sells.map((val,index)=>{
              return <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val.buyerName}</td>
                  <td>
                      <details>
                        <summary>Products Bought</summary>
                        <ul>
                            {val.productsBought.map((element,i)=>{
                                return <li key={i}>{element.title}</li>
                            })}
                        </ul>
                      </details>
                      </td>
              </tr>
          })}
      </tbody>
      </Table>
      </div>
}
