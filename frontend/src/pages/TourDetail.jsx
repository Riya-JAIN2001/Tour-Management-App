import React ,{useRef,useState,useContext} from 'react';
import "../Styles/tourDetail.css";
import {Container, Row,Col , Form,ListGroup, List} from "reactstrap";
import {useParams} from "react-router-dom";
import { useEffect } from 'react';
import avatar from "../assets/images/avatar.jpg"
import Booking from './../Components/Booking/Booking';
import Nesletter from '../Shared/Nesletter';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';
import { AuthContext } from '../context/AuthContext';
import AvgRatings from './../utils/AvgRatings';
const TourDetail = () => {
  const {id}=useParams()
  const reviewMsgRef=useRef("");
  const [tourReview,setTourReview]=useState();
  const {data:tour,loading,error}=useFetch(`${BASE_URL}/tours/tour/${id}`);
  const{photo, title, desc,price, reviews,city,address, distance,maxGroupSize}=tour;
  const {avgRating, totalRating}=AvgRatings(reviews);
  const {user}=useContext(AuthContext)
 
 
  const options={day:"numeric", month:"long", year:"numeric"}
  
  const submitHandler = async (e)=>{
    e.preventDefault();
    const reviewText=reviewMsgRef.current.value;
    
    try {
      if(!user||user===undefined || user ===null ){
        alert("please sign in")
      }
      const reviewObj ={
        username:user?.username,
        reviewText,
        rating:tourReview
      }
   
      const res =await fetch(`${BASE_URL}/review/${id}`,{
        mode: 'no-cors',
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)

      })

      const result=await res.json();
      if(!res.ok)  {return alert(result.message)}
      alert(result.message)
    } catch (error) {
      alert(error.message)
      
    }
  }
useEffect(()=>{
  window.scrollTo(0,0);
},[tour])


  return (
    <>
    <section>
      <Container>
        {
          loading && <h4 className='text-center pt-5'>Loading.....</h4>
        }
        {
          error && <h4 className='text-center pt-5'>{error}</h4>
        }
        {
          !loading && !error && <Row>
          <Col lg="8">
            <div className="tour_content">
              <img src={photo} alt="" />
              <div className="tour_info">
                <h2>{title}</h2>
              <div className="d-flex align-items-center gap-5">
              <span className="tour_rating d-flex align-items-center gap-1">
                    <i class="ri-star-s-fill" style={{color:"var(--secondary-color"}}></i>{avgRating===0 ? null: avgRating}
                    {totalRating===0 ? "Not rated":
                    <span>({reviews?.length})</span>}
                    
                </span>
                <span>
                <i class="ri-map-pin-user-fill"></i> {address}
                </span>
                
              </div>
              <div className="tour_extra_details">
                <span>
                <i class="ri-map-pin-2-fill"></i> {city}
                </span>
                <span>
                <i class="ri-money-dollar-circle-fill"></i> ${price}/per person
                </span>
                <span>
                <i class="ri-map-pin-time-line"></i> {distance} Kms
                </span>
                <span>
                <i class="ri-group-line"></i> {maxGroupSize} people
                </span>
                </div>
               <h5>Description</h5>
                <p>{desc}</p>

              </div>

              <div className="tour_review mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center mb-4 gap-3 rating_group">
                    <span  onClick={()=>setTourReview(1)}>1 <i  class="ri-star-s-fill"></i></span>
                    <span  onClick={()=>setTourReview(2)}>2 <i class="ri-star-s-fill"></i></span>
                    <span  onClick={()=>setTourReview(3)}>3 <i class="ri-star-s-fill"></i></span>
                    <span  onClick={()=>setTourReview(4)}>4 <i class="ri-star-s-fill"></i></span>
                    <span  onClick={()=>setTourReview(5)}>5 <i class="ri-star-s-fill"></i></span>



                  </div>
                  <div className="review_input">
                    <input type="text" required ref={reviewMsgRef} placeholder='share your thoughts' />
                    <button className="btn primary__btn text-white">Submit</button>
                  </div>
                </Form>
                <ListGroup className='user_reviews'>
                  {
                    reviews?.map(review=>(
                      <div className="review_item">
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString("en-US",options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                            {review.rating}<i class="ri-star-s-fill"></i>

                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }

                </ListGroup>
              </div>

            </div>
          </Col>
          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
        }
      </Container>
    </section>
    <Nesletter/>
    </>
  )
}

export default TourDetail
