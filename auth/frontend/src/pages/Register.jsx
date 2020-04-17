import React, { Component } from 'react'
import Axios from 'axios'

export default class Register extends Component {
    onRegisterClick = () => {
        const email = this.refs.email.value
        const password = this.refs.password.value
        const confirm = this.refs.confirm.value

        if(email && password && confirm){
            console.log('masuk')
            if(password === confirm){
                console.log('masuk')
                Axios.post('http://localhost:4000/auth/register' , {email : email,password : password})
                .then((res) => {
                    console.log(res)
                    if(res.data.error === false){
                        alert(res.data.message)
                    }else  if(res.data.error === true){
                        alert(res.data.message)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }else{
                return alert('password dan konfirm harus sama')
            }
        }else{
            return alert('semua form harus terisi')
        }
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
                                <input ref='confirm' className='form-control mt-3' placeholder='confirm your password' />
                                <button onClick={this.onRegisterClick} className='btn btn-outline-primary mt-3'>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
