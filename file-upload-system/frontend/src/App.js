import React from 'react';
import './App.css';
import PostNewProduct from './pages/PostNewProduct';
import Navbar from './components/Navbar'
import {BrowserRouter , Route} from 'react-router-dom'
import Products from './pages/ListProducts'
class App extends React.Component{

  render(){
    return(
      <div>
      <BrowserRouter>

        <Navbar />
          {/* <Route path='/'>
            <Home /> 
          </Route> */}
          <Route path='/products'>
            <Products /> 
          </Route>
          {/* <Route path='/product-detail/:id'>
            <ProductDetail /> 
          </Route> */}
          <Route path='/post-product'>
            <PostNewProduct /> 
          </Route>
        </BrowserRouter>
      </div>

    )
  }
}

export default App;
