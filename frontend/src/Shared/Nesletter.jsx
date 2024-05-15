import React from 'react'
import {Container, Row, Col} from "reactstrap";
import "./newsletter.css"
import maleTourist from ".././assets/images/male-tourist.png"
const Nesletter = () => {
  return (
    <section className='newsletter'>
        <Row>
            <Col lg="6">
                <div className="newsletter_content">
                    <h2> Subscribe now to get useful traveling information.</h2>
                    <div className="newsletter_input">
                        <input type="email" placeholder='Enter Your Email' />
                    <button className="btn newsletter_btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quis quasi magni.</p>
                </div>
            
            
            </Col>
            <Col lg="6">
                <img src={maleTourist} alt="" />
            </Col>
        </Row>
    </section>
  )
}

export default Nesletter