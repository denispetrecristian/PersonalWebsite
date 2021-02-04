import React, {useState} from 'react'
import {Nav, Navbar, NavDropdown } from "react-bootstrap";

function navbar() {
    return (
       <>
        <Navbar className="navbar">
            <div className="navbar-container">
                <Navbar.Collapse>
                    <Nav.Link href="#">Home</Nav.Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Open-Source</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Personal Projects</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">University Projects</NavDropdown.Item>
                        
                    </NavDropdown>

                    <Nav.Link href=""> Contact </Nav.Link>

                </Navbar.Collapse>
            </div>
        </Navbar>
       </>
    )
}

export default navbar
