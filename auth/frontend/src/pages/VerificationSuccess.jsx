import React, { Component } from 'react'
import Axios from 'axios'
import SuccessIcon from './../images/shield.png'
import ErrorIcon from './../images/error.png'

export default class VerificationSuccess extends Component {
    state = {error : null}
    componentDidMount(){
        const token = window.location.pathname.split('/')[2]
        Axios.patch('http://localhost:4000/auth/verify/' + token)
        .then((res) => {
            if(res.data.error === false){
                this.setState({error : false})
                alert(res.data.message)
            }else{
                this.setState({error : true})
            }
        })
        .catch((err) => {
            this.setState({error : true})
            alert(err.message)
        })
    }
    render() {
        if(this.state.error === null){
            return(
                <div className='text-center'>
                    loading ...
                </div>
            )
        }
        return (
            <div className='container' style={{height : '80vh'}}>
                <div className="row justify-content-center align-items-center h-100">
                    {
                        this.state.error ?
                        <div className="col-md-3">
                            <h1 className='text-center'>
                                Verification Error
                            </h1>
                            <img alt='icon' width='100%' src={ErrorIcon}></img>
                        </div>

                        :
                        <div className="col-md-3">
                            <h1 className='text-center'>
                                Verification Success
                            </h1>
                            <img alt='icon' width='100%' src={SuccessIcon}></img>
                        </div>
                    }
                    
                </div>
            </div>
        )
    }
}
