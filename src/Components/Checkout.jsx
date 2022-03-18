import React, { Fragment, useContext, useEffect, useState } from 'react'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import DashboardServices from './Services/DashboardServices'
export default function Checkout({cartItems,totalAmount,isSold}) {
    console.log(cartItems)
    const [dashboard,setDashboard] = useState({})
    let [dashboardId,setDashboardId] = useState("")
    const [buyerName,setBuyerName] = useState("")
    const getDashboardData = async()=>{
        const {docs} = await DashboardServices.getDashboard()
        setDashboardId(docs[0].id)
        console.log(docs[0].data().sells)
        setDashboard(docs[0].data())
    }
    useEffect(()=>{
        getDashboardData()
    },[])
    const [sell,setSell] = useState( {
        buyerName:'',
        productsBought:[],
        totalAmountPayed:0
    })
    const onSubmitHandler = async(e)=>{
        setSell({
            productsBought:cartItems,
            totalAmountPayed:totalAmount,
            buyerName:buyerName
        })
        let newData = {
            productsBought:cartItems,
            totalAmountPayed:totalAmount,
            buyerName:buyerName
        }
        console.log(sell)
        e.preventDefault()
        console.log(dashboard.sells)
        await DashboardServices.updateDashboard(dashboardId,{sells:[...dashboard.sells,newData]})
        console.log(dashboard.sells)
        isSold(true)
        console.log(dashboard)
    }

  return <Fragment>
      <div className='buyerFormComponent p-5 text-white bg-custom mb-4'>
          <Container className='mt-5'>
              <h1>Checkout</h1>
          <Form onSubmit={onSubmitHandler}>
              <Row>
                  <Col>
                  <Form.Group>
            <Form.Label>Buyer Name: </Form.Label>
            <Form.Control placeholder='Buyer name' onChange={(e)=>setBuyerName(e.target.value)}/>
            </Form.Group>
                  </Col>
                <Col className='d-flex col-2 pt-4 justify-content-center align-items-center'>
                    <Form.Group >
                    <Button type='submit'>Sell Item(s)</Button>
                    </Form.Group>
                </Col>
              </Row>
        </Form>
          </Container>

      </div>
  </Fragment>
}
