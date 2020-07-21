import React from 'react';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

export default function NavbarHeader() {
    return (
        <Container  >
            <div >
                <Row >
                    <Col lg={12} >
                        <Navbar collapseOnSelect expand="lg" bg="white" variant="secondary">
                            <Navbar.Brand ><h3 className="font-weight-bold text-danger">Covid19
                            <img src="https://covid.gov.pk/theme_img/core-img/Corona-Logo2.gif" width="130" height="70"  alt="covid-logo"/>
                            </h3></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className="ml-auto px-5">
                                    <Nav.Link href="#deets">Home</Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        Total Cases
      </Nav.Link>
                                    <Nav.Link href="#deets">More </Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        About us
      </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <br />

                    </Col>

                </Row>
            </div>
        </Container>
    );
}