import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

export default function Statistics() {
    return (
        <Container fluid className="bg-light" >
            <div >
                <Row className="justify-content-center">
                    <Col lg={8} >
                        <h5 className="text-muted">Wordwide Statistics</h5>
                        <Row>
                            <Col lg={2}>
                                <h3>
                                    <CountUp end={181476200} separator="," />
                                </h3>
                                <p className="text-muted">Comfirmed</p>
                            </Col>
                            <Col lg={2}>
                                <h3>
                                    <CountUp end={10000} separator="," />
                                </h3>

                                <p className="text-danger">Deaths</p>
                            </Col>
                            <Col lg={2}>

                                <h3>
                                    <CountUp end={121476200} separator="," />
                                </h3>
                                <p className="text-primary">Recovered</p>
                            </Col>
                            <Col lg={2}>

                                <h3>
                                    <CountUp end={10634} separator=","/>
                                </h3>
                                <p className="text-info">Critical</p>
                            </Col>
                        </Row>


                    </Col>

                </Row>
            </div>
        </Container>
    );
}