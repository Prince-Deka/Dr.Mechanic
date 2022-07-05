import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Navbar(props){
   const navigate= useNavigate();
   const usertp = sessionStorage.getItem('User Type')
   const username = sessionStorage.getItem('user Name')
   const[navChange,newNav]=useState("");
   const relocatelog = ()=>{
    navigate('/loginpage')
   }
   const relocateReg=()=>{
    navigate('/registrationPage')
   }
  const relocateHome=()=>{
    sessionStorage.removeItem('User Type')
    sessionStorage.clear();
    navigate('/'); 
  }
   if(usertp === 'User'){
    return(
      <>
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
<div className="container-fluid">
  <h1 className="navbar-brand" style={{color:'white', border: '3px solid yellow',borderRadius:'10px 0px 10px 0px'}}>{props.title}</h1>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">{props.Main}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">{props.Contact}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.ab}</Link>
      </li>
    </ul>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ToogleMOde}/>
</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
<Link to="/adcart"><i class="fa-solid fa-cart-flatbed" style={{color: 'white', fontSize:'xx-large'}}></i></Link>
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
<button type="button" className="btn btn-light mx-1 my-1 " onClick={relocateHome}>Sign out</button>
</div>
  </div>
</div>
</nav>
      </>)
   }
   else{
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <div className="container-fluid">
    <h1 className="navbar-brand" style={{color:'white', border: '3px solid yellow' ,borderRadius:'10px 0px 10px 0px'}}>{props.title}</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.Main}</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">{props.ab}</Link>
      </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ToogleMOde}/>
</div>
      <div>
      <button type="button" className="btn btn-light mx-1 my-1" onClick={relocateReg}>Sign up</button>
<button type="button" className="btn btn-light mx-1 my-1 " onClick={relocatelog}>Sign in</button>
</div>
    </div>
  </div>
</nav>
        </>)
   }
}