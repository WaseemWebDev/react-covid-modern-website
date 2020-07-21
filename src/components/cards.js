import React,{useEffect} from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import AOS from 'aos';

export default function Cards() {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <Container fluid className="bg-light">
      <br />
      <br />
      <br />
      <h6 className="text-danger text-center">How coronavirus is spread</h6>

      <h2 className="text-center">Transmission of COVID-19</h2>

      <center>
        {" "}
        <p className="text-center">
          Because it's a new illness, we do not know exactly how coronavirus
          spreads from person to person. Similar viruses are spread in cough
          droplets.
        </p>
      </center>
      <Row className="justify-content-center p-5">
        <Col xl={3} className="mb-3 ">
          <Card className=" shadow  " data-aos="zoom-in">
            <blockquote className="blockquote mb-0 p-0 card-body">
              <img
                src="https://image.freepik.com/free-vector/checking-body-temperature-concept_23-2148520721.jpg"
                alt="family-covid"
                className="img-fluid"
              />
              <h4 className="text-center">
                Person-to-person spread as close contact with infected
              </h4>
              <footer className="blockquote-footer">
                <p className="text-muted text-center">
                  The coronavirus is thought to spread mainly from person to
                  person. This can happen between people who are in close
                  contact with one another.
                </p>
              </footer>
            </blockquote>
          </Card>
        </Col>

        <Col xl={3} className="mb-3">
          <Card className=" shadow " data-aos="zoom-in">
            <blockquote className="blockquote mb-0 p-0 card-body">
              <img
                src="https://image.freepik.com/free-vector/family-protected-from-virus_52683-38997.jpg"
                alt="family-covid"
                className="img-fluid"
              />
              <h4 className="text-center">
                Touching or contact with infected surfaces or objects
              </h4>
              <footer className="blockquote-footer">
                <p className="text-muted text-center">
                  The coronavirus is thought to spread mainly from person to
                  person. This can happen between people who are in close
                  contact with one another.
                </p>
              </footer>
            </blockquote>
          </Card>
        </Col>

        <Col xl={3} className="mb-3 ">
          <Card className=" shadow mb-3 " data-aos="zoom-in">
            <blockquote className="blockquote mb-0 p-0 card-body">
              <img
                src="https://image.freepik.com/free-vector/virus-disinfection-concept_23-2148477224.jpg"
                alt="family-covid"
                className="img-fluid"
              />
              <h4 className="text-center">
                Droplets that from infected person coughs or sneezes
              </h4>
              <footer className="blockquote-footer">
                <p className="text-center text-muted">
                  The coronavirus is thought to spread mainly from person to
                  person. This can happen between people who are in close
                  contact with one another.
                </p>
              </footer>
            </blockquote>
          </Card>
        </Col>
        <br />
      </Row>
      <center>
        <Button
          variant="primary"
          size="lg"
          style={{ borderRadius: "10px", padding: "20px" }}
        >
          Have Question About Spreading?
        </Button>
      </center>
    </Container>
  );
}
