import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import DashboardServices from './Services/DashboardServices'

export default function Admins() {

    const [admins,setAdmins] = useState([])
    const getAdmins = async()=>{
        const {docs} = await DashboardServices.getDashboard();
        setAdmins(docs[0].data().admins)
        console.log(admins)
    }
    useEffect(()=>{
        getAdmins();
    },[])
  return <Fragment>
      <div className="booksTable">
      <Table className = "bg-custom text-white ">
          <thead>
              <th>#</th>
              <th>Email</th>
          </thead>
          <tbody>
              {admins.map((val,index)=>{
                  return <tr>
                      <td>{index+1}</td>
                      <td>{val}</td>
                  </tr>

              })}
          </tbody>
      </Table>
          </div>
     
  </Fragment>
}
