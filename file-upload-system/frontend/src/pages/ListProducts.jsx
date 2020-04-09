import React from 'react'
import { Card ,Typography,Button} from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
import Axios from 'axios';
import {Link} from 'react-router-dom'

const {Title} = Typography

class Products extends React.Component{
    state = {data : null}
    componentDidMount(){
        this.getAllProducts()
    }

    getAllProducts = () => {
        Axios.get('http://localhost:4000/product')
        .then((res) => {
            console.log(res.data)
            let newData = []
            let sudahAda;
            res.data.data.forEach((val) => {
                sudahAda = false
                for(var i = 0 ; i < newData.length ; i++){
                    if(val.product_id === newData[i].product_id){
                        sudahAda = true
                        break;
                    }
                }

                if(!sudahAda) newData.push(val)
                
            })
            console.log(res.data.data)
            console.log(newData)
            this.setState({data : newData})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderDataToJsx = () => {
        return this.state.data.map((val) =>{
            return(
                <div className='col-md-4'>
                    <Card>
                        <div style={{height : "120px"}} className='row'> 
                            <div className='col-6 h-100'>
                                <img alt='broken' width='100%' style={{objectFit :"cover",objectPosition :"top",height:'100%'}} src={'http://localhost:4000/' + val.image_url} />
                            </div>
                            <div className='col-6'>
                                <Title level={4}>
                                    {val.name}
                                </Title>
                                <div>
                                    Rp. {val.price}
                                </div>
                                <div className='mt-3'>
                                    <Link to={'/product-detail/' + val.product_id}>
                                        <Button type="primary" icon={<ArrowRightOutlined/>}>
                                                See Detail
                                        </Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </Card>
                </div>
            )
        })
    }

    render(){
        if(this.state.data === null) return <h1>Loading ...</h1>
        if(this.state.data.length === 0) return <h1>Data Product Masih Kosong</h1>
        return(
            <div className='container mt-5'>
                <div className='row'>
                    {this.renderDataToJsx()}
                </div>

            </div>
        )
    }
}

export default Products

