import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
export default function Description() {
    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <Container fluid  style={{
 background: "radial-gradient(circle, rgba(211,227,232,0.028448879551820738) 0%, rgba(0,159,255,0.3981967787114846) 100%, rgba(0,36,32,0.1292892156862745) 100%)",
        }} >
            <div >
                <Row className="justify-content-center">
                
                    <Col lg={3}  style={{marginTop:"55px"}}>
                        <img src="https://image.freepik.com/free-vector/prevention-infographic-staying-safe_23-2148522477.jpg"
                            className="img-fluid" alt="description"
                            data-aos="flip-left"

                        />
                    </Col>
                    <Col data-aos="flip-right" lg={4} className="text-center ml-5"  style={{marginTop:"90px"}}>
                        <h5 className="text-muted">About the disease</h5>
                        <h3>Coronavirus (COVID-19)</h3>
                        <h6  className="text-left">COVID-19 is a new illness that can affect your lungs and airways. It's caused by a
                         virus called coronavirus. It was discovered in December 2019 in Wuhan, Hubei, China.</h6>
                         <br/>
                         <p  className="text-left">
                         Common signs of infection include respiratory symptoms, fever, cough, shortness of breath
                          and breathing difficulties. In more severe cases,
                          infection can cause pneumonia, severe acute respiratory syndrome,
                           kidney failure and even death.
                         </p>
                         <br/>
                         <p  className="text-left">
                         Standard recommendations to prevent infection spread include regular hand washing, covering mouth 
                         and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contac
                         t with anyone showing symptoms of respiratory illness such as coughing and sneezing.
                         </p>
                       
                    </Col>

                </Row>
            </div>
        </Container>
    );
}