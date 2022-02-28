import React, { Component } from 'react'
import { Container,Row,Col,Button, Form ,Alert} from 'react-bootstrap'
import { Fragment } from 'react'
import BookDataService from '../../Components/Services/Book.services'
export default class AddBook extends Component {
    bookData = {
        title:'',
        category:'',
        author:'',
        pages:0,
        price:0,
        quantity:0
    }
    state = {
        errorMessage: '',
        successMessage:''
    }
    handleChange = (e)=>{
        this.bookData[e.target.name] = e.target.value
        console.log(this.bookData)
    }
    validateInputs = (title,cat,author,pages,price,quantity) =>{
        if(title == '' || cat == '' || author == '' || pages == '' || price == '' || quantity == '' )
        {
            this.setState({
                errorMessage:'Please fill all inputs'
            })
            return false
        }
        if(pages<0 || quantity <0 || price <0)
        {
            this.setState({
                errorMessage:'Pages/Price/Quantity must be a positive number'
            })
            return false;
        }
        if(this.isLetter(pages) || this.isLetter(quantity) || this.isLetter(price))
        {
            this.setState({
                errorMessage:'Pages/Price/Quantity must be numeric numbers'
            })
            return false;
        }
        else
        {
            this.setState({
                errorMessage:''
            })
            return true
        }

    }
     handleSubmit = async(e)=>{
         console.log("jdsf")
        e.preventDefault()
        if(!this.validateInputs(this.bookData.title,this.bookData.category,this.bookData.author,this.bookData.pages,this.bookData.price,this.bookData.quantity))
        console.log("not successful")
        else
        {
            try
            {
                await BookDataService.addBooks(this.bookData);
                console.log("book added successfully")
                this.setState({
                errorMessage:'',
                successMessage:'Book added successfully'
                })
            }
            catch(err){
                console.log(err.message)
                this.setState({
                    successMessage:'',
                    errorMessage:err.message
                })
            }
        }
    }
    isLetter = (str) =>{
        return str.match(/[a-z]/i)
    }
    render(){
  return <Fragment>
      <div className="addBookForm p-5">
            <Form className=' w-100 p-5 shadow-lg' onSubmit={this.handleSubmit}>
                <h1>Add A Book</h1>
                <Form.Label>Book Title</Form.Label>
                <Form.Control placeholder = "Book Title" name = "title"  onChange = {this.handleChange}/>
                <Form.Label className = "mt-3">Book Category</Form.Label>
                <Form.Select placeholder = "Book Category" className='form-control' name = "category" onChange = {this.handleChange}>
                <option value="fantasy">Fantasy</option>
                <option value="thriller">Thriller</option>
                <option value="scifi">Science Fiction</option>
                </Form.Select>
                <Form.Label>Book Author</Form.Label>
                <Form.Control placeholder = "Book Author" name = "author"  onChange = {this.handleChange}/>
                <Form.Label>Book Pages</Form.Label>
                <Form.Control placeholder = "Book Pages" name = "pages"  onChange = {this.handleChange}/>
                <Form.Label>Book Price</Form.Label>
                <Form.Control placeholder = "Book Price" name = "price"  onChange = {this.handleChange}/>
                <Form.Label>Book Quantity</Form.Label>
                <Form.Control placeholder = "Book Quantity" name = "quantity"  onChange = {this.handleChange}/>
                <Button className='btn btn-primary mt-4' type = "submit">Add Book!</Button>
                {this.state.errorMessage && <Alert variant = "danger" className = "mt-1">{this.state.errorMessage}</Alert> }
                {this.state.successMessage && <Alert variant = "success" className = "mt-1 text-dark">{this.state.successMessage}</Alert> }

            </Form>
      </div>

  </Fragment>
  }
}
