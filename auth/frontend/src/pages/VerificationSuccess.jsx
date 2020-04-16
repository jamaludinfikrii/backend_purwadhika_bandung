import React, { Component } from 'react'
import Axios from 'axios'

export default class VerificationSuccess extends Component {
    componentDidMount(){
        const id = window.location.pathname.split('/')[2]
        Axios.patch('http://localhost:4000/auth/verify/' + id)
        .then((res) => {
            if(res.data.error === false){
                alert(res.data.message)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>
                    Verification Success
                </h1>
            </div>
        )
    }
}
