import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { getCurrentUser, getLogout } from './api';

const NavBarComponent = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try{
                const user_response = await getCurrentUser();
                if (!user_response.ok) {
                    throw new Error('Failed to fetch current user')
                }
                const userData = await user_response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching current user:', error)
            }
        };

        fetchCurrentUser();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await getLogout()
            if (!response.ok) {
                throw new Error('Failed to log out current user')
            }
            window.location.reload()
        } catch (error) {
            console.error('Error fetching current user:', error)
        }
    }

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
                {user ? (
                    <Nav className='ms-auto'>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </Nav>
                ) : (
                    <Nav className='ms-auto'>
                        <Nav.Link href='/login'>Login</Nav.Link>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarComponent;