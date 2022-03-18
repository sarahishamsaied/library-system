import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import CartServices from '../Services/Cart.services'
export default function CartCard({cardTitle,price,quantity,cat,cardId}) {
  let navigate = useNavigate()
  const deleteFromCart = async()=>{
    console.log("deleted")
    await CartServices.removeFromCart(cardId);
    navigate(0)
  }
  return <Fragment>
      <div className="cartCard bg-custom">
        <p className={cardTitle.length<19?' text-center mt-4 h5':'text-center  mt-4 fw-bold h5'}>{cardTitle}</p>
        <p className=' fw-light mt-4'>Price: {price}$</p>
        <p className=' fw-light'>Category: {cat}</p>
        <div className="buttons row justify-content-around w-100 align-items-center ">
        <Button className='bg-transparent w-25 border-0 bg-custom cartButton' onClick={deleteFromCart}><AiIcons.AiFillDelete/></Button>
        <Button className='bg-transparent w-25 border-0 bg-custom cartButton'><AiIcons.AiOutlinePlus/></Button>
          </div>


      </div>
    </Fragment>
}
