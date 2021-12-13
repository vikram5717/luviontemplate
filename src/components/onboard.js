import React from 'react'
import onboard from '../images/features-img1.png'

export default function Onboard() {
    return (
        <React.Fragment>

<div className="row m-0 formbody loginbox">
<div className="col-lg-6 col-md-12 p-0">

<div className="loginimage2">
<img src={onboard} alt="image15"/>
</div>

</div>
<div className="col-lg-6 col-md-12 p-0">
<div className="login-content">
<div className="d-table">
<div className="d-table-cell">
<div className="login-form">

<h3 className="maintopic">Onboard With Finnoviti</h3>

<form>

<div className="form-group">
<input type="number"  name="Aadhaar" id="email" placeholder="Enter Your Aadhaar Number" className="form-control myinput "/>
</div>

<div className="form-group">
<input type="number"  name="email" id="email" placeholder="Enter Your Pancard Number" className="form-control myinput"/>
</div>

<div className="form-group">
<input type="text"  name="email" id="email" placeholder="Enter Your State" className="form-control myinput"/>
</div>

<div className="form-group">
<input type="text"  name="email" id="email" placeholder="Enter Your City" className="form-control myinput"/>
</div>

<div className="form-group">
<input type="text"  name="password" id="password" placeholder="Enter Your Buisness " className="form-control myinput"/>
</div>

<div className="form-group">
<input type="text"  name="password" id="password" placeholder="Enter Shop Name " className="form-control myinput"/>
</div>


<button type="submit" className="btn btn-primary">Submit</button>


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
