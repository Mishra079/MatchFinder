import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../image/logo.png';

function Navbar(){

    return(
        <>
     <nav class="navbar navbar-expand-sm ">

<div class="container-fluid">
      <img src={logo} alt='' style={{height:'50px',width:'90px'}}/>
  <ul class="navbar-nav">
    <li class="nav-item">
     <Link to="/" class="nav-link">Home</Link>
    </li>
    <li class="nav-item">
     <Link to="/Registration" class="nav-link">Register</Link>
    </li>
    <li class="nav-item">
     <Link to="/Login" class="nav-link" >Login</Link>
    </li>
    <li class="nav-item">
     <Link to="/About" class="nav-link">About us</Link>
    </li>
    <li class="nav-item">
     <Link to="/Contact" class="nav-link">Contact us</Link>
    </li>
  </ul>
</div>

</nav>
        </>
    )
}
 
export default Navbar;