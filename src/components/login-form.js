import React from 'react';

export default class Form extends React.Component {

    handleOnSubmit = (e) => {
        e.preventDefault()
        
    }

    render() {
        return(
            <div className="login-form">
                <form onSubmit={this.handleOnSubmit} >
              <input placeholder="UserName" className="form-input" />
              <br />
              <input placeholder="Password" className="form-input"/>
              <br />
              <input className="form-submit" type="submit" />
            </form>
            </div>
        )
    }
}