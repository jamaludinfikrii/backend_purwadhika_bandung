import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className='card'>
                            <div className="card-body">
                                <input className='form-control mt-3' placeholder='email' />
                                <input className='form-control mt-3' placeholder='password' />
                                <input className='form-control mt-3' placeholder='confirm your password' />
                                <button className='btn btn-outline-primary mt-3'>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
