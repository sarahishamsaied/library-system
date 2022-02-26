import React,{Fragment} from 'react'
import { Form,Button, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import BookServices from '../Services/Book.services'
import { useEffect } from 'react'
import { useState } from 'react'
export default function UpdateBook(props) {
    const {id} = useParams()
    const [data,setData] = useState({
        title:'',
        category:'',
        author:'',
        pages:0,
        price:0,
        quantity:0
    })
    let [status,setStatus] = useState({
        message:'',
        error:false
    })
    const getRequestedBook = async()=>{
        const fetchedBook = await BookServices.getBook(id)
        setData(fetchedBook.data());
        console.log(fetchedBook.data())
        console.log(data)
    }
    useEffect(()=>{
        getRequestedBook();
    },[]);
    const validateInputs = (title,cat,author,pages,price,quantity) =>{
        if(title == '' || cat == '' || author == '' || pages == '' || price == '' || quantity == '' )
        {
            setStatus({
                message:'Please fill all inputs'
            })
            return false
        }
        if(pages<0 || quantity <0 || price <0)
        {
            setStatus({
                message:'Pages/Price/Quantity must be a positive number'
            })
            return false;
        }
        if(isLetter(pages) || isLetter(quantity) || isLetter(price))
        {
            setStatus({
                message:'Pages/Price/Quantity must be numeric numbers'
            })
            return false;
        }
        else
        {
            setStatus({
                message:''
            })
            return true
        }
    }
    const isLetter = (str) =>{
        console.log(str)
        return str.match(/[a-z]/i)
    }
    const handleSubmit = async(e)=>{
        setStatus({
            message:"",
            error:false
        })
        e.preventDefault()
        // if(!validateInputs(data.title,data.category,data.author,data.pages,data.price,data.quantity)){
        //     console.log(data)
        //     setStatus({
        //         error:true
        //     })
        //     return
        // }
        try{
            await BookServices.updateBook(id,data)
            setStatus({
                message:"Book Updated Successfully!",
                error:false
            })
             
        }
        catch(err){
            console.log(err.message)
            setStatus({
                message:"Oops! There's an error. Try again later",
                error:false
            })
        }

    }
   return <Fragment>
  <div className="addBookForm p-5">
        <Form className=' w-100 p-5 shadow-lg' onSubmit={handleSubmit}>
            <h1>Update Book</h1>
            <Form.Label>Book Title</Form.Label>
            <Form.Control placeholder = "Book Title" name = "title" value = {data.title} onChange = {(e)=>setData({[e.target.name]:e.target.value})}/>
            <Form.Label className = "mt-3">Book Category</Form.Label>
            <Form.Select placeholder = "Book Category" className='form-control' name = "category" value = {data.category} onChange = {(e)=>setData({[e.target.name]:e.target.value})}>
            <option value="fantasy">Fantasy</option>
            <option value="thriller">Thriller</option>
            <option value="scifi">Science Fiction</option>
            </Form.Select>
            <Form.Label>Book Author</Form.Label>
            <Form.Control placeholder = "Book Author" name = "author" value = {data.author} onChange = {(e)=>setData({[e.target.name]:e.target.value})}/>
            <Form.Label>Book Pages</Form.Label>
            <Form.Control placeholder = "Book Pages" name = "pages" value = {data.pages} onChange = {(e)=>setData({[e.target.name]:e.target.value})}/>
            <Form.Label>Book Price</Form.Label>
            <Form.Control placeholder = "Book Price" name = "price" value = {data.price} onChange = {(e)=>setData({[e.target.name]:e.target.value})} />
            <Form.Label>Book Quantity</Form.Label>
            <Form.Control placeholder = "Book Quantity" name = "quantity" value = {data.quantity} onChange = {(e)=>setData({[e.target.name]:e.target.value})}/>
            <Button className='btn btn-primary mt-4' type = "submit">Update Book!</Button>
            {status.message && <Alert className={status.error?'danger mt-3':'success mt-3'}>{status.message}</Alert>}
        </Form>
  </div>

</Fragment>
}
