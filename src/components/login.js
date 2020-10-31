import React from 'react'
import logo from '../mor-logo.png'
import Form from './login-form'
// import {Link} from 'react-router-dom'
// import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    handleOnSubmit = (e) => {
        e.preventDefault()
        // console.log("handleOnClick", this.props.history)
        this.props.history.push("/order")

    }

    render() {
        return (
            <>
                <div className="login">
                    <section>
                        <div className="container">
                            <br /> <br />
                            <img src={logo} className="logo-image" />
                            <div>
                                <Form handleOnSubmit={e => this.handleOnSubmit(e)} />
                            </div>
                        </div>
                        
                    </section>
                </div>
                <div>
                    <span className="credentials">*Please contact rob@morkombucha.com for login credentials</span>
                </div>
            </>
        );
    }
}

export default Login;
