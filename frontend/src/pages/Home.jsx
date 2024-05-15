import React from 'react'
import "../Styles/Home.css"
import {Container, Row,Col} from "reactstrap";
import heroimg from "../assets/images/hero-img01.jpg";
import heroimg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldimg from "../assets/images/world.png"
import Subtitles from './../Shared/Subtitles';
import SearchBar from '../Shared/SearchBar';
import Servicelist from '../services/Servicelist';
import FeatureTourList from '../Components/FeaturedTour/FeatureTourList';
import experienceIomg from "../assets/images/experience.png"
import MasanoryImageGallery from '../Components/image_gallery/MasanoryImageGallery';
import Testinominal from '../Components/testinominal/Testinominal';
import Newsletter from  "../Shared/Nesletter"

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center">
                <Subtitles subtitle={"Know before you go"}/>
                <img src={worldimg} alt="img" />
              </div>
              <h1>Travelling open the to creating <span className="highlight">memories</span></h1>
              <p>Traveling allows you to meet people of different cultures, with diverse traditions and distinctive lifestyles. As you travel and discover these newly found worlds, take a moment to reflect not only on the differences that you observe in their lifestyle and behavior but on the things that unite us.</p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_img-box">
              <img src={heroimg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_img-box hero_video-box mt-4">
              <video autoPlay controls src={heroVideo} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_img-box mt-5">
              <img src={heroimg2} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="service_subtitle">What we serve</h5>
            <h2 className="service_title">we offer our best services</h2>
            
          </Col>
          <Servicelist/>
        </Row>
      </Container>
    </section>


    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-3'>
          <Subtitles subtitle={"Explore"}/>
          <h2 className="features_tour_title">Our Best Tour</h2>
          </Col>
          <FeatureTourList/>
        </Row>
        
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience_content">
              <Subtitles subtitle={"Experience"}/>
              <h2>With Our All Experince <br /> We Will Serve You</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Enim eaque doloribus, a esse quasi praesentium est porro neque atque! Suscipit.</p>
            </div>
            <div className="counter_wrapper d-flex align-items-center gap-5">
              <div className="counter_box">
                <span>12k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter_box">
                <span>2k+</span>
                <h6>Regular client</h6>
              </div>
              <div className="counter_box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience_img">
            <img src={experienceIomg} alt="" />
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitles subtitle={"Gallery"}/>
            <h2 className="gallery_title">visit our customer tour 
            <i className="ri-gallery-upload-line"></i></h2>
          </Col>
          <Col lg="12">
           
              <MasanoryImageGallery/>
            
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitles subtitle={"Fans Love"}/>
            <h2 className="testimonial_title">What our fans say about us <span><i class="ri-heart-fill"></i></span> </h2>
            </Col>
            <Testinominal/>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default Home