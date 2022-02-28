import React, { useEffect, useState } from 'react'
import { Table,Button, Form, Row } from 'react-bootstrap'
import { Fragment } from 'react'
import BookDataService from '../Services/Book.services'
import * as BiIcons from 'react-icons/bi'
import { getAuth } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom'
// import BookDataProvider, { BookCtx, useBookContext } from '../../Context/BookDataContext'
import { useContext } from 'react'
 function BooksTable() {
    const [books,setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getBooks();
    },[]);
     const getBooks = async()=>{
     const data = await BookDataService.getAllBooks();
     console.log(data.docs);
     setBooks(data.docs.map((doc)=>({ ...doc.data(), id:doc.id})))
     console.log(books)
    }
    const deleteHandler = async(id)=>{
        await BookDataService.deleteBook(id);
        getBooks();
    };
    const UpdateHandler = (id)=>{
        navigate(`/updateBook/${id}`)
    }
  return <Fragment>
      {/* <pre>{JSON.stringify(books,undefined,2)}</pre> */}
      <div className="booksTable">
      <h2 className='text-white'>Books List</h2>
      <Table striped bordered hover className = "bg-custom">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Book Title</th>
                  <th>Book Author</th>
                  <th>Book Category</th>
                  <th>Book Pages</th>
                  <th>Book Price</th>
                  <th>Book Quantity</th>
                  <th colSpan={2}>Operations</th>
                  <th><BiIcons.BiRefresh className='refreshButton' size={42} onClick = {()=>getBooks()}/></th>
                  
              </tr>
          </thead>
          <tbody>
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
               </tr>
              })}
          </tbody>
      </Table>
      </div>
  </Fragment>
}
export default BooksTable
