import React from 'react'
import loginimage from '../images/2.png'
import { Link } from 'react-router-dom'

export default function Login() {
    return (

    <React.Fragment>


<section className="login-area ">

<div className="row m-0 formbody loginbox">

<div className="col-lg-6 col-md-12 p-0">
<div className="loginimage">
<img  src={loginimage} className="loginimage" alt="image5"/>
</div>
</div>


<div className="col-lg-6 col-md-12 p-0 ">
<div className="login-content">
<div className="d-table">
<div className="d-table-cell">
<div className="login-form">

<h3 className="maintopic">Login With Finnoviti</h3>

<form>

<div className="form-group">
<input type="text" name="NAME" id="email" placeholder="Enter Your Name" className="form-control myinput"/>
</div>

<div className="form-group">
<input type="password" name="password" id="email" placeholder="Enter Password" className="form-control myinput"/>
</div>


<button className="btn btn-primary">
    <Link to="/Home">Login</Link>
    </button>

<div className="connect-with-social">
<a href="index.html"><button type="submit" className="facebook"><i className="fab fa-facebook-square"></i> Connect with Facebook</button></a>
<a href="index.html"><button type="submit" className="google"><i className="fab fa-google"></i> Connect with Google</button></a>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

        </React.Fragment>
    )
}
