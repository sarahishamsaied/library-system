import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert,Button } from 'react-bootstrap'
import Card from '../Card/Card'
import CartCard from '../CartCard/CartCard'
import CartServices from '../Services/Cart.services'
import * as AiIcons from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Checkout from '../Checkout'
export default function Cart() {
    const [cartItems,setCartItems] = useState([])
    const [totalAmount,setTotalAmount] = useState(0)
    const [sellRequest,setSellRequest] = useState(false)
    const [isEmpty,setIsEmpty] = useState(true)
    const [cartId,setCartId] = useState("")
    let navigate = useNavigate()
    let sum = 0;
    const getCartItems = async()=>{
        try{
            const {docs} = await CartServices.getAllCartItems();
            setIsEmpty(false)
            setCartId(docs[0].id)
            setCartItems(docs.map((val)=>({...val.data(),id:val.id})))
            console.log("cart is")
            console.log(cartItems)
        }
        catch(err){
            console.log(err.message)
            setIsEmpty(true)
        }
    }
   const getTotalAmount = ()=>{
        cartItems.map((val)=>{
            return sum+=Number(val.price);
        })
        setTotalAmount(sum);
    }
    useEffect(()=>{
        getCartItems()
    },[])
    useEffect(()=>{
        getTotalAmount()
    })
    const deleteHandler = async(id)=>{
        await CartServices.removeFromCart(id);
        getCartItems();
    }
    
    const onPurchaseHandler = async(isSold)=>{
        if(isSold)
        {
            console.log("sold")
            cartItems.map((val)=>{
             return deleteHandler(val.id)
            })
            navigate(0)
        }
        else
        console.log("Not sold!")
    }
  return <Fragment>
      <div className='mt-5 p-5 text-white'>
          <h1 className='bg-custom my-3 p-3'>Your Cart</h1>
          {isEmpty?<Alert variant='danger'>Cart is empty</Alert>:''}
          <div className="options row align-items-center justify-content-around ">
          <h2 className='my-3 col-6'>Total Amount: {totalAmount}$</h2>
          <h2 className='col-5 p-2 pl-4 bg-custom rounded continueToCheckOut' onClick={()=>{
            setSellRequest(true)
            window.scrollTo({
                top: 900,
                left: 0,
                behavior: 'smooth'
              });
          }
            }>Continue to checkout {<AiIcons.AiOutlineArrowRight/>}</h2>
        </div>
          <div className="cards p-4">
          {cartItems.map((val)=>{
              return <CartCard cardTitle={val.title} cat = {val.category} price = {val.price} quantity = {val.quantity} cardId = {val.id} key = {val.id}/>
          })}
          </div>
      </div>
      {sellRequest&&<Checkout cartItems = {cartItems} totalAmount = {totalAmount} isSold = {onPurchaseHandler}/>}
  </Fragment>
}
