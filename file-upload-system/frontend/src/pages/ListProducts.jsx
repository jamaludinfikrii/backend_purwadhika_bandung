import React from 'react'
import { Card ,Typography,Button} from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons';
const {Title} = Typography


class Products extends React.Component{
    render(){
        return(
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card>
                            <div style={{height : "120px"}} className='row'> 
                                <div className='col-6 h-100'>
                                    <img alt='broken' width='100%' style={{objectFit :"cover",objectPosition :"top",height:'100%'}} src='https://static.republika.co.id/uploads/images/inpicture_slide/buah-apel-bisa-menurunkan-resiko-penyakit-jantung-_151122103604-356.jpg' />
                                </div>
                                <div className='col-6'>
                                    <Title level={4}>
                                        Product 1
                                    </Title>
                                    <div>
                                        Rp. 10000
                                    </div>
                                    <div className='mt-3'>
                                        <Button type="primary" icon={<ArrowRightOutlined/>}>
                                            See Detail
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <div style={{height : "120px"}} className='row'> 
                                <div className='col-6 h-100'>
                                    <img alt='broken' width='100%' style={{objectFit :"cover",objectPosition :"top",height:'100%'}} src='https://awsimages.detik.net.id/community/media/visual/2018/10/11/bb3a4647-77f9-47eb-90e9-f31c08a4cbe9.jpeg?a=1' />
                                </div>
                                <div className='col-6'>
                                    <Title level={4}>
                                        Product 1
                                    </Title>
                                    <div>
                                        Rp. 10000
                                    </div>
                                    <div className='mt-3'>
                                        <Button type="primary" icon={<ArrowRightOutlined/>}>
                                            See Detail
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    </div>

                </div>

            </div>
        )
    }
}

export default Products

