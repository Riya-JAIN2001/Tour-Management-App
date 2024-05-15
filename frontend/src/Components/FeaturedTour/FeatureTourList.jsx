import React from 'react'
import {Col} from "reactstrap";
import TourCard from '../../Shared/TourCard';
import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../utils/config';
const FeatureTourList = () => {
  
  const {data:featuredTour,loading,error}= useFetch(`${BASE_URL}/tours/search/getFeature`);
  
  return (
    <>{
      loading && <h4>Loading..........</h4>
    }
    {
      error && <h4>{error}</h4>
    }
    
    {
      !loading && !error &&  featuredTour?.map((tour)=>(
            <Col lg="3" md="6" sm="6" key={tour._id}>
                <TourCard tour={tour}/>
               
            </Col>
        ))
    }
    </>
  )
}

export default FeatureTourList