import React from 'react'
import Cards from './Cards';
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import { Col } from 'reactstrap';

const Serviceslist = () => {
    const serviceData=[
        {
            imgUrl:weatherImg,
            title:"Calculate Weather",
            desc:"the state of the atmosphere, including temperature, atmospheric pressure."
        },
        {
            imgUrl:guideImg,
            title: "Best Tour Guide",
            desc:"the state of the atmosphere, including temperature, "
        },
        {
            imgUrl:customizationImg,
            title: "Customization" ,
            desc:"the state of the atmosphere, including temperature, "
        }
    ]

  return (
    <>{
    serviceData.map((item,index)=>(
        <Col lg="3" md="6" sm="12" className='mb-4'
         key={index}> <Cards item={item}/>
        </Col>
    ))
}</>
  )
}

export default Serviceslist