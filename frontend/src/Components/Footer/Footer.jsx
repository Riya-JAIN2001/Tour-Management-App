import React from 'react'
import {Container,Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link}  from "react-router-dom";
import logo from "../../assets/images/logo.png"
import "./Footer.css"
const Footer = () => {
  const quick_links2=[
    {
      path:'/gallery',
      display:"Gallery"

    },
    {
      path:"/login",
      display:"Login"
    },
    {
      path:"/register",
      display:"Register"
    }
  ]
  const quick_links=[
    {
      path:'/home',
      display:"Home"

    },
    {
      path:"/about",
      display:"About"
    },
    {
      path:"/tour",
      display:"Tours"
    }
  ]
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
             <div className="logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ullam ad! Accusamus possimus consectetur nulla!</p>
             <div className=" social_link d-flex align-items-center gap-4">
              <span><Link to={"/#"}><i class="ri-youtube-fill"></i></Link></span>
              <span><Link to={"/#"}><i class="ri-github-fill"></i></Link></span>
              <span><Link to={"/#"}><i class="ri-facebook-circle-line"></i></Link></span>
              <span><Link to={"/#"}><i class="ri-instagram-fill"></i></Link></span>
             </div>
             
             </div>
          </Col>
          <Col lg="3">
            <h5 className="footer_link_title">Discover</h5>
            <ListGroup className="footer_quick_link ">{
              quick_links.map((item, index)=>(
                <ListGroupItem className='ps-0 border-0' key={index}>{
                  <Link to={item.path}>{item.display}</Link>
                }</ListGroupItem>
              ))
            }</ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link_title">Quick Links</h5>
            <ListGroup className="footer_quick_link ">{
              quick_links2.map((item, index)=>(
                <ListGroupItem className='ps-0 border-0' key={index}>{
                  <Link to={item.path}>{item.display}</Link>
                }</ListGroupItem>
              ))
            }</ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link_title">Contact</h5>
            <ListGroup className="footer_quick_link ">
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='d-flex align-items-center gap-2 mb-0'>
                  <span>
                  <i class="ri-map-pin-line"></i>
                  </span>Address:
                </h6>
                <p className="mb-0">London, UK</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='d-flex align-items-center gap-2 mb-0'>
                  <span>
                  <i class="ri-mail-line"></i>
                  </span>Email:
                </h6>
                <p className="mb-0">riyajain@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='d-flex align-items-center gap-2 mb-0'>
                  <span>
                  <i class="ri-phone-fill"></i>
                  </span>Phone:
                </h6>
                <p className="mb-0">+91 12345-67892</p>
              </ListGroupItem>
            </ListGroup>
            </Col>

            <Col lg="12" className='text-center pt-5'>
            <p className="copyright">Copyright {year} All design and work develop by @riyaJain.</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer