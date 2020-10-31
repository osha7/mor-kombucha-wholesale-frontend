
import logo from '../mor-logo.png'
import Form from './login-form'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
        <div className="login">
            <section>
                <div className="container">
                    <br /> <br />
                    <img src={logo} className="logo-image" />
                    <div>
                        <Form />
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

export default Login;
