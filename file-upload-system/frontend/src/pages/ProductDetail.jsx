import React, { Component } from 'react'
import {Card} from 'antd'
import Axios from 'axios'

class ProductDetail extends Component {
    state = {data : null}
    componentDidMount(){
        this.getDataProduct()
    }
    getDataProduct = () => {
        Axios.get('http://localhost:4000/product/1')
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        if(this.state.data === null) return <h1>Loading ...</h1>
        if(this.state.data.length === 0) return <h1>Data Kosong</h1>
        return (
            <div className='container'>
                <h1 className='text-center'>Product Detail Page</h1>
                <h4 className='text-center'>{this.state.data[0].name}</h4>
                <h5 className='text-center'>Rp. {this.state.data[0].price}</h5>
                <div className='row justify-content-center'>
                    <div className='col-md-6' style={{height : '50vh'}}>
                        <Card className='h-100'>
                            <img src={"http://localhost:4000/" + this.state.data[0].image_url }style={{height :"45vh",objectFit : "contain"}} width='100%' alt="broken"/>
                        </Card>
                    </div>
                </div>
                <div className='row mt-3'>
                   {this.state.data.slice(1).map((data) => {
                       return(
                        <div className='col-md-2' style={{height : "120px"}}>
                            <Card className='h-100'>
                                <img src={"http://localhost:4000/" + data.image_url} style={{height :"80px",objectFit : "contain"}} width='100%' alt="broken"/>
                            </Card>
                        </div>
                       )
                   })}
                </div>
            </div>
        )
    }
}


export default  ProductDetail;