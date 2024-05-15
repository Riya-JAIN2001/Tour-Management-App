import React from 'react'
import "./Commonsection.css";
import  {Container,Row,Col} from "reactstrap";
const Commonsection = ({title}) => {
  return (
   <section className="common_section">
    <Container>
        <Row>
            <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Commonsection