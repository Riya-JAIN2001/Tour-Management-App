import React from 'react'
import Slider from "react-slick";
import avg01 from "../../assets/images/ava-1.jpg"
import avg02 from "../../assets/images/ava-2.jpg"
import avg03 from "../../assets/images/ava-3.jpg"

const Testinominal = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoints:992,
                settings:{
                    slideToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots:true
                },
            },
            {
                breakpoints:576,
                settings:{
                    slideToShow:1,
                    slideToScroll:1,

                },
            },
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testinominal py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ut explicabo! Amet ut dicta cumque quos sed ipsam impedit ducimus numquam, tempora assumenda pariatur illo, unde quia! In, quasi nulla?</p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
        
            <img src={avg01} alt="" className='w-25 h-25 rounded-2'/>
        
        <div><h2 className='mb-0 mt-3'>Rishabh Jain</h2>
        <p>customer</p>
        </div>
     </div>
     </div>
     <div className="testinominal py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ut explicabo! Amet ut dicta cumque quos sed ipsam impedit ducimus numquam, tempora assumenda pariatur illo, unde quia! In, quasi nulla?</p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
        
            <img src={avg03} alt="" className='w-25 h-25 rounded-2'/>
        
        <div><h2 className='mb-0 mt-3'>Dev Jain</h2>
        <p>customer</p>
        </div>
     </div>
     </div>
     <div className="testinominal py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ut explicabo! Amet ut dicta cumque quos sed ipsam impedit ducimus numquam, tempora assumenda pariatur illo, unde quia! In, quasi nulla?</p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
        
            <img src={avg02} alt="" className='w-25 h-25 rounded-2'/>
        
        <div><h2 className='mb-0 mt-3'>Monish Jain</h2>
        <p>customer</p>
        </div>
     </div>
     </div>
    </Slider>
  )
}

export default Testinominal