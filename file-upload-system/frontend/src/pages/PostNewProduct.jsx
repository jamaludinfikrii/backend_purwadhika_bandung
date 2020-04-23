import React from 'react'
import Axios from 'axios'




class PostNewProduct extends React.Component{
  onBtnSubmitClick = () => {
    let name = this.refs.name.value
    let price = Number(this.refs.price.value)
    let images = this.refs.images.files
    let data = {
      name : name,
      price : price
    }

    console.log(images)

    // convert object to string
    data = JSON.stringify(data)
    console.log(data)

    // check if there is null value
    if(name && price && images){
      let fd = new FormData()
      for(let i = 0 ; i< images.length ; i ++){
        // fd.append 'fieldname' , 'value / file / text' 
        fd.append('product-images' , images[i])
      }
      fd.append('productData' , data )
      console.log(fd)

      Axios.post('https://file-upload-system-fikri.herokuapp.com/product', fd )
      .then((res) => {
        console.log(res.data)
        alert(res.data.message)
        this.refs.name.value = ''
        this.refs.price.value = null
        this.refs.images.value = null
        
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
            <span className="card-title text-center">Post Product</span>
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


export default PostNewProduct