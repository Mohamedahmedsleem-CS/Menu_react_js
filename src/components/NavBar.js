import React, { useState } from 'react';
import { Navbar, Container, Row, Nav, Form, FormControl } from 'react-bootstrap';

const NavBar = ({ filterbySearch }) => {
    const [searchValue, setSearchValue] = useState('');

    // Function to handle the search and prevent the form from submitting/reloading
    const onSearch = (e) => {
        e.preventDefault();  // Prevents the page from reloading
        filterbySearch(searchValue);
        setSearchValue('');  // Clear the input after search
    };

    return (
        <Row>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <div className="brand-color">مطعم جديد</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            {/* Add navigation links here if necessary */}
                        </Nav>
                        <Form className="d-flex" onSubmit={onSearch}>
                            <FormControl
                                type="text"
                                placeholder="ابحث.."
                                className="mx-2"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                            />
                            <button type="submit" className="btn-search">بحث</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
};

export default NavBar;
