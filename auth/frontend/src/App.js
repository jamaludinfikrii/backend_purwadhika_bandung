import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import Register from './pages/Register';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
       <Route path='/' exact>
          <div>
            Hello World
          </div>
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
       
      </BrowserRouter>
    )
  }
}

export default App;
