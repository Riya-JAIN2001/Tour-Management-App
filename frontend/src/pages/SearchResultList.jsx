import React from 'react'
import Commonsection from './../Shared/Commonsection';
import { Container,Row,Col } from 'reactstrap';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TourCard from './../Shared/TourCard';

import Nesletter from './../Shared/Nesletter';
const SearchResultList = () => {
  const location=useLocation()
    const [data]=useState(location.state)
    
  return (
    
    <>
    <Commonsection title={"Tour Search Result"}/>
    <section>
     <Container>
      <Row>
        {
          data.length===0 ?<h4 className='text-center'>No Tour Found</h4>: data?.map(tour=> 
            <Col lg ="3" className='mb-4' key={tour._id}>
               
              <TourCard tour={tour}/></Col>)
        }

      </Row>
     </Container>

    </section>
  <Nesletter/>
    </>
  )
}

export default SearchResultList