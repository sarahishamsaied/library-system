import React, { useEffect, useState } from 'react'
import { Table,Button, Form, Row,Col } from 'react-bootstrap'
import { Fragment } from 'react'
import BookDataService from '../Services/Book.services'
import * as BiIcons from 'react-icons/bi'
import { getAuth } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'
// import BookDataProvider, { BookCtx, useBookContext } from '../../Context/BookDataContext'
import { useContext } from 'react'
import CartServices from '../Services/Cart.services'
import * as BsIcons from 'react-icons/bs'
 function BooksTable() {
    const [books,setBooks] = useState([]);
    const [chosenCategory,setChosenCategory] = useState([]);
    const [filteredBooks,setFilteredBooks] = useState([])
    const [cart,setCart] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getBooks();
    },[]);
    useEffect(()=>{
        getCartItems()
    },[])
     const getBooks = async()=>{
     const data = await BookDataService.getAllBooks();
     console.log(data)
     setBooks(data.docs.map((doc)=>({ ...doc.data(), id:doc.id})))
    }
    const deleteHandler = async(id)=>{
        await BookDataService.deleteBook(id);
        getBooks();
    };
    const UpdateHandler = (id)=>{
        navigate(`/updateBook/${id}`)
    }   
    const getCartItems = async()=>{
        try{
            const {docs} = await CartServices.getAllCartItems()
            setCart(docs.map((ele)=>({...ele.data(),id:ele.id,number:0})));
        }
        catch(err){
            console.log(err.message)
            return;
        }

    } 
    const addToCartHandler = async(item,itemId)=>{
        await CartServices.addToCart(item)
    }
    const filterBooks = (cat)=>{
        if(cat === "all")
        {
            getBooks()
        }
        const filtered = books.filter((element)=>{
            return cat === element.category
        })
        setFilteredBooks(filtered)
    }
  return <Fragment>
      {/* <pre>{JSON.stringify(books,undefined,2)}</pre> */}
      <div className="booksTable">
      <Row className='justify-content-between shadow-lg'>
      <h2 className='text-white'>Books List</h2>
      <div className='d-flex justify-content-end mb-4 mt-2'>
          <label className='text-white h4'>Filter by category</label>
          <select name="" id="" className='form-control w-25 ml-5' onChange={(e)=>{
              filterBooks(e.target.value)
          }}>
          <option value="0" disabled = {true}>Filter by</option>
          <option value="all">All Books</option>
          <option value="thriller">Thriller</option>
          <option value="fantasy">Fantasy</option>
          <option value="scifi">Science Fiction</option>
        </select>
      </div>
      </Row>
      <Table  className = "bg-custom text-white ">
          <thead>
              <tr>
                  <th>#</th>
                  <th >Book Title</th>
                  <th>Book Author</th>
                  <th>Book Category</th>
                  <th>Book Pages</th>
                  <th>Book Price</th>
                  <th>Book Quantity</th>
                  <th colSpan={3}>Operations</th>
                  <th><BiIcons.BiRefresh className='refreshButton' size={42} onClick = {()=>getBooks()}/></th>
              </tr>
          </thead>
          {filteredBooks.length === 0? <tbody>
              {books.map((val,index)=>{
                   return <tr key={val.id}>
                   <td>{index+1}</td>
                   <td>{val.title}</td>
                   <td>{val.author}</td>
                   <td>{val.category}</td>
                   <td>{val.pages}</td>
                   <td>{val.price}</td>
                   <td>{val.quantity}</td>
                   <td>{<Button variant = "primary" onClick={()=>UpdateHandler(val.id)}>Edit</Button>}</td>
                   <td>{<Button variant = "danger" onClick={()=>deleteHandler(val.id)}>Delete</Button>}</td>
                   <td ><Button variant = "primary" onClick={()=>addToCartHandler(val,val.id)}><BsIcons.BsFillCartPlusFill/></Button></td>
               </tr>
              })}
          </tbody>: <tbody>
              {filteredBooks.map((val,index)=>{
                   return <tr key={val.id}>
                   <td>{index+1}</td>
                   <td>{val.title}</td>
                   <td>{val.author}</td>
                   <td>{val.category}</td>
                   <td>{val.pages}</td>
                   <td>{val.price}</td>
                   <td>{val.quantity}</td>
                   <td>{<Button variant = "primary" onClick={()=>UpdateHandler(val.id)}>Edit</Button>}</td>
                   <td>{<Button variant = "danger" onClick={()=>deleteHandler(val.id)}>Delete</Button>}</td>
                   <td ><Button variant = "primary" onClick={()=>addToCartHandler(val,val.id)}><BsIcons.BsFillCartPlusFill/></Button></td>

               </tr>
              })}
          </tbody>
          }
         
      </Table>
      </div>
  </Fragment>
}
export default BooksTable

