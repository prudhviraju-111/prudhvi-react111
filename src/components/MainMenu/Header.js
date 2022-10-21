
 // Header.js Module
import React from 'react'


//Router_package
import { NavLink } from "react-router-dom";


function Header() {


  var MenuNames = ["Home", "About", "Services", "Contact", "ItServices", "Myclass", "Lifecycle","Restapi","ReactBootstrap","Signup","rcc","ReactHooks","ReactEffect","pagination","Hooksuser","HooksSigup","HooksRedux"]

    return (
        <>

          {/* LINKS FOR MENU*/}

<nav className="navbar navbar-expand-lg navbar-light " 
style={{
        backgroundColor: '#475562',
        borderBottom: '0.5px white solid', 
        borderTop:'0.5px white solid'
}}>
    
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    {/*
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active text-white" activeClassName="text-white bg-dark" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" activeClassName="text-white bg-dark" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" activeClassName="bg-dark" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " activeClassName="text-white bg-dark" to="contact">Contact</NavLink>
        </li>
      </ul>
      */}

      
      <ul className="navbar-nav">
          {
             MenuNames.map((data, i) => 
             <li className="nav-item px-1" key={i}>
             <NavLink className="nav-link text-white" activeClassName="bg-dark"   
             to={`/${data.toLowerCase()}`}>
            {data}
            </NavLink>
        </li>
             )
          }
      </ul>
        

{/*
        <ul className="navbar-nav">

          <li className="nav-item px-1">
            <NavLink className="nav-link text-white" activeClassName="bg-dark"   
             to="/home">Home
            </NavLink>
          </li>

          <li className="nav-item px-1">
            <NavLink className="nav-link text-white" activeClassName="bg-dark"   
             to="/about">About
            </NavLink>
          </li>

          <li className="nav-item px-1">
            <NavLink className="nav-link text-white" activeClassName="bg-dark"   
             to="/services">Services
            </NavLink>
          </li>

          <li className="nav-item px-1">
            <NavLink className="nav-link text-white" activeClassName="bg-dark"   
             to="/itservices">Itservices
            </NavLink>
          </li>

          <li className="nav-item px-1">
            <NavLink className="nav-link text-white" activeClassName="bg-dark"   
             to="/contact">Contact
            </NavLink>
          </li>

        </ul>

    */}
      



    </div>
  </div>
</nav>

          {/* LINKS FOR MENU */}  

        </>
    )
}
export default Header;