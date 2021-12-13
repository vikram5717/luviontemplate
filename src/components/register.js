import React from 'react'

export default function Register() {
    return (
        <React.Fragment>
            
            <div className="row m-0 formbody loginbox">
<div className="col-lg-6 col-md-12 p-0">

<div className="loginimage3">
<img src="assets/img/3.png" alt="image21"/>
</div>


</div>
<div className="col-lg-6 col-md-12 p-0">
<div className="login-content">
<div className="d-table">
<div className="d-table-cell">
<div className="login-form">

<h3 className="maintopic">Register With Finnoviti</h3>

<form>

<div className="form-group">
<input type="text" name="name" id="name" placeholder="Enter Your Name" className="form-control myinput"/>
</div>

<div className="form-group">
<button className="btn btn-info otpbutton"><a href="index.html">Get Otp</a></button>
<input type="text" name="number" id="number" placeholder="Enter Your Mobile Number" className="form-control myinput"/>
</div>

<div className="form-group">
    <input type="password" name="otp" id="otp" placeholder="Enter OTP " className="form-control myinput"/>
</div>

<div className="form-group">
<input type="text" name="address" id="address" placeholder="Enter Your Address" className="form-control myinput"/>
</div>


<div className="form-group">
<input type="text" name="text" id="email" placeholder="Enter Your Email" className="form-control myinput"/>
</div>


<button className="btn btn-primary">Submit</button>

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


        </React.Fragment>
    )
}
