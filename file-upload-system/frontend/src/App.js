import React from 'react';
import './App.css';
import Axios from 'axios'
class App extends React.Component{
  onBtnSubmitClick = () => {
    let name = this.refs.name.value
    let price = Number(this.refs.price.value)
    let images = this.refs.images.files
    let data = {
      name,price
    }

    let dataImages = []
    for(var i = 0; i < images.length ; i ++){
      dataImages.push(images[i])
    }
    console.log(dataImages)
    data = JSON.stringify(data)
    console.log(data)
    if(name && price && images){
      let fd = new FormData()
      fd.append('product-images' , dataImages)
      fd.append('data' , data )

      Axios.post('http://localhost:4000/product', fd )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }else{
      alert('error')
    }
  }




  render(){
    return(
      <div className='container pt-5'>
        <div className='row justify-content-center'> 
          <div className='col-md-4 card'>
            <h5 class="card-title">Post Product</h5>
            <div className='card-body'>
              <input type='text' ref='name' placeholder='Product Name' className='form-control' />
              <input type='number' ref='price' placeholder='Product Price' className='form-control  mt-3' />
              <input ref='images' type='file' className='form-control mt-3' accept='image/*' multiple="multiple"/>
              <input type='button' className='btn btn-outline-primary mt-3' value='submit' onClick={this.onBtnSubmitClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
