import React from 'react';
import { Container,Row,Col,Button } from 'reactstrap';
import {Link} from "react-router-dom";
import "../Styles/thankyou.css"
const ThankYou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg="12" className='pt-5 text-center'>
               <div className="thank_you">
             <span> 
                <i class="ri-checkbox-circle-line"></i></span>
             <h1 className="mb-3 fw-semibold">Thank You</h1>
             <h3 className="mb-4">Your Tour is booked</h3> 
             <Button className='btn back_btn primary__btn '><Link to="/home">Back to home</Link></Button></div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou