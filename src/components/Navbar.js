import React from 'react';
import "../App.css";
import {  Navbar, Nav, } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand className="logobutton"> <Link style={{ textDecoration: "none", color: "#000" }} to="/"> HOMELAND  </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" style={{marginLeft:"33%"}}>
                            <Nav.Link > <Link style={{ textDecoration: "none", color: "#000" , marginLeft:"10px" }} to="/"> Home </Link> </Nav.Link> 
                            <Nav.Link > <Link style={{ textDecoration: "none", color: "#000" , marginLeft:"10px" }} to="/"> Features </Link> </Nav.Link>
                            <Nav.Link > <Link style={{ textDecoration: "none", color: "#000" , marginLeft:"10px" }} to="/ContactUs">Contact Us </Link> </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                        <Nav.Link className="loginbutton"> <Link style={{ textDecoration: "none", color: "#000" }} to="/Login"> LOG IN </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default Header;