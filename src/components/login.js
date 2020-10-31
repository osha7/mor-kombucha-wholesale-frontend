
import logo from '../mor-logo.png'
import Form from './login-form'

function Login() {
  return (
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
  );
}

export default Login;
