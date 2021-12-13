import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            
<div className="luvion-nav">
<div className="container">
<nav className="navbar navbar-expand-md navbar-light">
<Link className="navbar-brand" to="/">
<img src="assets/img/logo3.png" style={{ height:"29px" , width :"168px" }} alt="logo"/>
<img src="assets/img/black-logo.png" alt="logo2"/>
</Link>
<div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
<ul className="navbar-nav">
<li className="nav-item">
    <Link to="/" className="nav-link active">Home</Link>

{/* <ul className="dropdown-menu">
<li className="nav-item"><a href="index.html" className="nav-link active">Home Demo - 1</a></li>
<li className="nav-item"><a href="index-2.html" className="nav-link">Home Demo - 2</a></li>
<li className="nav-item"><a href="index-3.html" className="nav-link">Home Demo - 3</a></li>
<li className="nav-item"><a href="index-4.html" className="nav-link">Home Demo - 4</a></li>
<li className="nav-item"><a href="index-5.html" className="nav-link">Home Demo - 5</a></li>
</ul> */}
</li>
<li className="nav-item">
    <Link to="/about" className="nav-link">About Us</Link></li>

<li className="nav-item"><Link to="/notfound" className="nav-link">Services<i className="fas fa-chevron-down"></i></Link>
<ul className="dropdown-menu service">

<div className="row">

<div className="col-sm section1">
    <h4 className="topic">Services</h4>
</div>

<div className="col-sm section1">
    <ol className="listing">
    <li className="nav-item"><a href="features-1.html" className="nav-link">AEPS</a></li>
    <li className="nav-item"><a href="features-2.html" className="nav-link">RECHARGE</a></li>
    <li className="nav-item"><a href="features-1.html" className="nav-link">BILLPAY</a></li>
    <li className="nav-item"><a href="features-2.html" className="nav-link">UTI PANCARD</a></li>
    </ol>
</div>

 <div className="col-sm serviceicon">
     <img src="assets/img/service3.svg" alt="service5"/>
</div>

</div>

</ul>
</li>


{/* <li className="nav-item"><a href="index.html" className="nav-link">Pages <i className="fas fa-chevron-down"></i></a>

<ul className="dropdown-menu">
<li className="nav-item">
<Link to="/about" className="nav-link">About Us</Link>
</li>


<li className="nav-item"><a href="index.html" className="nav-link">Features</a>
<ul className="dropdown-menu">
<li className="nav-item"><a href="features-1.html" className="nav-link">Features Style One</a></li>
<li className="nav-item"><a href="features-2.html" className="nav-link">Features Style Two</a></li>
<li className="nav-item"><a href="features-1.html" className="nav-link">Features Style One</a></li>
<li className="nav-item"><a href="features-2.html" className="nav-link">Features Style Two</a></li>
</ul>
</li>

<li className="nav-item"><a href="team.html" className="nav-link">Team</a></li>
<li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>
<li className="nav-item"><a href="login.html" className="nav-link">Login</a></li>
<li className="nav-item"><a href="sign-up.html" className="nav-link">Register</a></li>
<li className="nav-item"><a href="error-404.html" className="nav-link">404 Error</a></li>
<li className="nav-item"><a href="faq.html" className="nav-link">FAQ</a></li>
</ul>
</li> */}


<li className="nav-item">
    <Link to="/Pricing" className="nav-link">Pricing</Link></li>


<li className="nav-item">
<Link to="/register" className="nav-link">Registration</Link></li>

<li className="nav-item">
<Link to="/Onboard" className="nav-link">Onboard</Link></li>

</ul>

<div className="others-options">

<Link to="/Login" className="login-btn"><i className="flaticon-user"></i> Log In</Link>
</div>

</div>
</nav>
</div>
</div>
</div>


    )
}
