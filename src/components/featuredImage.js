import React,{useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from 'aos';

export default function FeaturedImage() {

    useEffect(()=>{
        AOS.init();
    },[])

  const url = 
  "https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5e82be129c4559303a278448_package-landing-covid-illustrations.png";

  return (
    <Container fluid>
      <div>
        <Row className="justify-content-center">
          <Col lg={3} className="mt-xl-5">
            <h1 data-aos="fade-left" className="font-weight-bold text-success text-center">
              Covid 19
            </h1>
            <center>
              <div className="divider"></div>
            </center>
            <br />
            <h5 className="text-capitalize" data-aos="fade-left">
        
              COVID-19 is a new illness that can affect your lungs and airways.
              It's caused by a vir us called coronavirus. It was discovered in
              December 2019 in Wuhan, Hubei, China.
            </h5>
            <br />
            <Button
              variant="primary"
              size="md"
              style={{ borderRadius: "10px" }}
              data-aos="fade-left"
            >
              Read more
            </Button>
          </Col>
          <Col lg={6}>
            <center>
              <img
              data-aos="fade-top"
                src="https://i.pinimg.com/originals/f6/af/7b/f6af7bcdc152e52d0bcc177ef2acbd8d.gif"
                alt="animated-logo"
                height="130"
                width="130"
              />
            </center>
            <img src={url} alt="covid" className="img-fluid" id="main-image"  data-aos="fade-right"/>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
