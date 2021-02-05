import React from 'react'
import {Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

function navbar() {
    return (
       <>
        <Navbar className="navbar" >

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#" className="nav-link">Home</Nav.Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" className="nav-link">Open-Source</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className="nav-link">Personal Projects</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" className="nav-link">University Projects</NavDropdown.Item>
                                
                    </NavDropdown>

                    <Nav.Link href="" className="nav-link"> Contact </Nav.Link>
                </Nav>

            </Navbar.Collapse>
               
            
        </Navbar>
     
       </>
    )
}

export default navbar
