import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Global Hospital</Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home" className="text-white">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services" className="text-white">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#department" className="text-white">Department</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#appoinment" className="text-white">Appoinment</Nav.Link>
                    {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;