import React, { Component } from 'react'
import Axios from 'axios'

export default class Login extends Component {
    state={
        loading : false
    }

    onLoginBtnClick = () => {
        this.setState({loading : true})

        const email = this.refs.email.value
        const password = this.refs.password.value
        const data = {
            email,
            password
        }
        if(email && password){
            Axios.post('http://localhost:4000/auth/login' , data)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token' , res.data.token)
                alert(res.data.message)
                window.location = '/product-list'
            })
            .catch((err) => {
                alert(err.message)
            })
        }else{
            alert("All form must be filled")
        }

        this.setState({loading : false})
        this.refs.email.value = ''
    this.refs.password.value = ''
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className='card'>
                            <div className="card-body">
                                <input ref='email' className='form-control mt-3' placeholder='email' />
                                <input ref='password' className='form-control mt-3' placeholder='password' />
                                {
                                    this.state.loading === false ?
                                    <button onClick={this.onLoginBtnClick} className='btn btn-outline-primary mt-3'>Login</button>
                                    :
                                    <button disabled className='btn btn-outline-primary mt-3'>loading ...</button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




