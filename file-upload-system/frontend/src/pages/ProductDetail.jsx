import React, { Component } from 'react'
import {Card, Button} from 'antd'
import Axios from 'axios'

class ProductDetail extends Component {
    state = {data : null , dataSelected : null , selectedImage: null}

    componentDidMount(){
        this.getDataProduct()
    }
    getDataProduct = () => {
        const id = window.location.pathname.split('/')[2]
        Axios.get('http://localhost:4000/product/' + id)
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data.data, dataSelected : res.data.data[0]})
        })

        .catch((err) => {
            console.log(err)
        })
    }

    renderListImage = () => {
        let listImages = this.state.data
        listImages= listImages.filter((val) => {
            return val.image_id !== this.state.dataSelected.image_id
        })
        return listImages.map((data) => {
            return(
             <div className='col-md-2' style={{height : "120px"}}>
                 <Card className='h-100'>
                     <img  onClick={() => this.setState({dataSelected : data})} src={"http://localhost:4000/" + data.image_url} style={{height :"80px",objectFit : "contain",cursor:'pointer'}} width='100%' alt="broken"/>
                 </Card>
             </div>
            )
        })
    }

    onBtnSaveEditClick = () => {
        console.log(this.state.dataSelected)
        const image = this.refs.editImage.files[0]
        const id_image = this.state.dataSelected.image_id
        const path = this.state.dataSelected.image_url

        console.log('masuk')

        const fd = new FormData()
        fd.append('editImage',image)
        fd.append('path',path)
        Axios.patch('http://localhost:4000/product/image/' + id_image, fd)
        .then((res) => {
            if(res.data.error === false){
                alert(res.data.message)
                this.setState({selectedImage : null})
                this.getDataProduct()
            }
        })
        .catch((err) => {

        })
        
    
    }
    onChangeInputImage = () => {
        // alert('masuk')
        let image = this.refs.editImage.files[0]
        this.setState({selectedImage : image.name})
    }
    render() {
        if(this.state.data === null || this.state.dataSelected === null) return <h1>Loading ...</h1>
        if(this.state.data.length === 0) return <h1>Data Kosong</h1>
        return (
            <div className='container'>
                <h4 className='text-center'>{this.state.data[0].name}</h4>
                <h5 className='text-center'>Rp. {this.state.data[0].price}</h5>
                <div className='row justify-content-center'>
                    <div className='col-md-6' style={{height : '50vh'}}>
                        <Card className='h-100'>
                            <img src={"http://localhost:4000/" + this.state.dataSelected.image_url }style={{height :"45vh",objectFit : "contain"}} width='100%' alt="broken"/>
                        </Card>
                        <div className='text-center mt-3'>
                            <Button className='text-center' onClick={()=> this.refs.editImage.click()} type='primary'>
                                { this.state.selectedImage === null ? 'Edit Image' : this.state.selectedImage}
                            </Button>
                            <input onChange={this.onChangeInputImage} accept='image/*' style={{display : "none"}} ref='editImage' type="file"/>
                            {
                                this.state.selectedImage === null ?
                                <Button className='text-center' type='danger'>Delete Image</Button>
                                :
                                <span>
                                    <Button className='text-center' onClick={this.onBtnSaveEditClick} type='ghost'>Save</Button>
                                    <Button className='text-center' onClick={() => this.setState({selectedImage : null}) } type='danger'>Cancel</Button>
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                   {
                       this.renderListImage()
                   }
                </div>
            </div>
        )
    }
}


export default  ProductDetail;