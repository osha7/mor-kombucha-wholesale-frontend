import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Form extends React.Component {

    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log("handleOnClick")
        return <Redirect to="/order" />

    }

    render() {
        return(
            <div className="login-form">
                <form onSubmit={this.handleOnSubmit} >
                    <input placeholder="User" className="form-input" />
                    <br />
                    <input placeholder="Password" className="form-input"/>
                    <br />
                    <input className="form-submit" type="submit" />
                </form>
            </div>
        )
    }
}