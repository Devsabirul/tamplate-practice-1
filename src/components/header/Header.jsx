import React from 'react'
import './header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="./image/logo.webp" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className='m-auto nav_content'>
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About Us </Nav.Link>
                            <Nav.Link>Our Team</Nav.Link>
                            <Nav.Link>Patient</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                        <button className='btn btn_success'>Contact Us</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
