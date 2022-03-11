import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {Routes,Route} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import SignUp from './Components/SignUp';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import CounterCtxProvider from './Context/CounterCtxFile';
import Counter from './Components/Counter';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import NavBar from './Components/Navbar/NavBar';
import Error from './Components/Error/Error';
import AddBook from './Components/Add Book/AddBook';
import BooksTable from './Components/BooksTable/BooksTable';
import UpdateBook from './Components/UpdateBook/UpdateBook';
// import BookDataProvider from './Context/BookDataContext';
import Dashboard from './Components/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout';
import BooksSold from './Components/BooksSold';
import {useUserAuth} from '../src/Context/UserAuthContext'
import Admins from './Components/Admins';
import LoadingScreen from './Components/LoadingScreen';
function App() {
  const user = useUserAuth()
  console.log(user)
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <LoadingScreen/>
          <UserAuthContextProvider>
          <Routes>
          <Route exact path = "/" element = {!user?<WelcomePage/>:<Home/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/addBook" element = {        
          <ProtectedRoute>
            <AddBook/>
          </ProtectedRoute>}/>
          <Route path = "/dashboard" element = {
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>}/>
            <Route path = "/checkout" element = {
            <ProtectedRoute>
              <Checkout/>
            </ProtectedRoute>}/>
            <Route path = "/booksSold" element = {
            <ProtectedRoute>
              <BooksSold/>
            </ProtectedRoute>}/>
          <Route path = "/updateBook/:id" element = {        
          <ProtectedRoute>
            <UpdateBook/>
          </ProtectedRoute>}/>
          <Route path = "/booksTable" element = {        
          <ProtectedRoute>
            <BooksTable/>
          </ProtectedRoute>}/>
          <Route path = "/addBook" element = {<AddBook/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/error" element = {<Error/>}/>
          <Route path = "/home" element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>
          <Route path = "/cart" element = {
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          }/>
                    <Route path = "/admins" element = {
            <ProtectedRoute>
              <Admins/>
            </ProtectedRoute>
          }/>
          </Routes>
          <NavBar/>
          </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
