import React from "react";
//import { Link } from "react-router-dom";

import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap/';

import img from '../assets/fork.png';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <img
                        src={img}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <Navbar.Brand href="/Product">Aadam's CookPages</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            <NavDropdown title="Saved Recipes" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/Menu">Menu</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/shoppingList">
                                    Shopping List
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;






