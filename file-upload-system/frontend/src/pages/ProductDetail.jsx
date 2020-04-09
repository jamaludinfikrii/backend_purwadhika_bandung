import React, { Component } from 'react'
import {Card} from 'antd'

class ProductDetail extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Product Detail Page</h1>
                <h4 className='text-center'>Product Name</h4>
                <h5 className='text-center'>Product Price</h5>
                <div className='row justify-content-center'>
                    <div className='col-md-6' style={{height : '50vh'}}>
                        <Card className='h-100'>
                            <img src="http://localhost:4000/public/PRD-IMG-1586398993692.jpeg" style={{height :"100%",objectFit : "cover"}} width='100%' alt="broken"/>
                        </Card>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-2' style={{height : "120px"}}>
                        <Card className='h-100'>
                            <img src="http://localhost:4000/public/PRD-IMG-1586398993692.jpeg" style={{height :"100%",objectFit : "cover"}} width='100%' alt="broken"/>
                        </Card>
                    </div>
                    <div className='col-md-2' style={{height : "120px"}}>
                        <Card className='h-100'>
                            <img src="http://localhost:4000/public/PRD-IMG-1586398993692.jpeg" style={{height :"100%",objectFit : "cover"}} width='100%' alt="broken"/>
                        </Card>
                    </div>
                    <div className='col-md-2' style={{height : "120px"}}>
                        <Card className='h-100'>
                            <img src="http://localhost:4000/public/PRD-IMG-1586398993692.jpeg" style={{height :"100%",objectFit : "cover"}} width='100%' alt="broken"/>
                        </Card>
                    </div>
                    <div className='col-md-2' style={{height : "120px"}}>
                        <Card className='h-100'>
                            <img src="http://localhost:4000/public/PRD-IMG-1586398993692.jpeg" style={{height :"100%",objectFit : "cover"}} width='100%' alt="broken"/>
                        </Card>
                    </div>
                    <div className='col-md-2' style={{height : "120px"}}>
                        <Card className='h-100'>
                            <img src="http://localhost:4000/public/PRD-IMG-1586398993692.jpeg" style={{height :"100%",objectFit : "cover"}} width='100%' alt="broken"/>
                        </Card>
                    </div>
                    <div className='col-md-2' style={{height : "120px"}}>
                        <Card className='h-100'>
                            <img src="http://localhost:4000/public/PRD-IMG-1586398993692.jpeg" style={{height :"100%",objectFit : "cover"}} width='100%' alt="broken"/>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}


export default  ProductDetail;