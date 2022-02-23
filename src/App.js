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
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <Row>
          <Col>
          <UserAuthContextProvider>
          <Routes>
          <Route exact path = "/" element = {<WelcomePage/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/home" element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>
          </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
