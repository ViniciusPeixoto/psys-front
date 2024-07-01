import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBarComponent = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand href='/'>PSYS</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-nav-bar' />
            <Navbar.Collapse id='basic-nav-bar'>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/profile'>Profile</Nav.Link>
                    <NavDropdown title='Trees' id='basic-nav-dropdown'>
                        <NavDropdown.Item href='/planted'>Your Planted Trees</NavDropdown.Item>
                        <NavDropdown.Item href='/account-planted'>Your Account Planted Trees</NavDropdown.Item>
                        <NavDropdown.Item href='/trees'>Tree Collection</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className='ms-auto'>
                    <Nav.Link href='/login'>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarComponent;