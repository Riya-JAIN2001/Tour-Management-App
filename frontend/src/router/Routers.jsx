import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import Tour from './../pages/Tour';
import TourDetail from './../pages/TourDetail';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
  return (
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/tours/search" element={<SearchResultList/>}/>
  <Route path="/tours" element={<Tour/>}/>
  <Route path="/tours/:id" element={<TourDetail/>}/>
  <Route path="/thank-you" element={<ThankYou/>}/>
</Routes>
  )
}

export default Routers