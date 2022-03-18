import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Form, Row,Table } from 'react-bootstrap'
import * as AiIcons from 'react-icons/ai'
import Card from '../Card/Card'
import BookServices from '../Services/Book.services'
import DashboardServices from '../Services/DashboardServices'
export default function Search() {
    const [searchQuery,setSearchQuery] = useState("")
    const [allBooks,setAllBooks] = useState([])
    const [searchResults,setSearchResults] = useState([])

    console.log(searchQuery)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!searchQuery)
        return
        console.log("hii")
        getAllBooks()
        getSearchResults()
    }
    const getSearchResults = ()=>{
       const x =  allBooks.filter((query)=>{
            return query.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        })
        setSearchResults(x)
        console.log(searchResults)
    }
    const getAllBooks = async()=>{
        try{
            const {docs} = await BookServices.getAllBooks()
            setAllBooks(docs.map((element)=>({...element.data(),id:element.id})))
           console.log(allBooks)
        }
        catch(err){
            console.log(err.message)
        }

    }
  return <Fragment>
      <div className="searchContainer vh-100 p-5">
          <Form onSubmit={handleSubmit}>
          <Container className='p-5'>
              <h1 className='text-white mb-5'>What are you looking for?</h1>
              <Row>
                  <Col className='col-10'>
                  <Form.Control placeholder='search books' className='searchInput bg-custom'onChange={(e)=>setSearchQuery(e.target.value)}>
                  </Form.Control>
                  </Col>
                  <Col>
                  <Button className='bg-transparent p-0 border-0' type='submit'><AiIcons.AiOutlineSearch size={40} className = "text-white searchIcon"/></Button>
                  </Col>
              </Row>
          </Container>
          </Form>
          <Table className = "bg-custom text-white ">
          <thead>
              <tr>
                  <th>#</th>
                  <th >Book Title</th>
                  <th>Book Author</th>
                  <th>Book Category</th>
                  <th>Book Pages</th>
                  <th>Book Price</th>
                  <th>Book Quantity</th>                  
              </tr>
          </thead>
          <tbody>
              {searchResults.map((val,index)=>{
                   return <tr key={val.id}>
                   <td>{index+1}</td>
                   <td>{val.title}</td>
                   <td>{val.author}</td>
                   <td>{val.category}</td>
                   <td>{val.pages}</td>
                   <td>{val.price}</td>
                   <td>{val.quantity}</td>
               </tr>
              })}
          </tbody>
      </Table>
          </div>
  </Fragment>
}
