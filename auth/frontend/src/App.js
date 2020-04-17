import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Register from './pages/Register';
import VerificationSuccess from './pages/VerificationSuccess';
import FarmHubNavbar from './component/Navbar';
import Login from './pages/Login';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <FarmHubNavbar />
       <Route path='/' exact>
          <div>
            Hello World
          </div>
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/verification-success'>
          <VerificationSuccess />
        </Route>
       
      </BrowserRouter>
    )
  }
}

export default App;
