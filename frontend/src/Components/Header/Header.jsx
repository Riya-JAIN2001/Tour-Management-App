import React from 'react';
import {useRef,useEffect, useContext} from "react"
import {Container,Row, Button} from "reactstrap"
import {NavLink,Link,useNavigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
import logo from "../../assets/images/logo.png"
import "./Header.css";
const Header = () => {
  const headerRef=useRef(null)
  const menuRef=useRef(null)
  const navigate=useNavigate()
  const {user, dispatch}=useContext(AuthContext)
  const logout =()=>{
    dispatch({type:'LOGOUT'})
    
      
      navigate('/')
  
    
  }
  const nav_links=[
    {
      path:'/',
      display:"Home"

    },
    {
      path:"/about",
      display:"About"
    },
    {
      path:"/tours",
      display:"Tours"
    }
  ]
  
  const stickyHeaderFunc=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky_header')

      }
      else{
        headerRef.current.classList.remove('sticky_header')}
      }
    )
  }

  useEffect(()=>{
stickyHeaderFunc()
return window.removeEventListener('scroll', stickyHeaderFunc)
  })
const toggleMenu=()=>menuRef.current.classList.toggle('show_menu')

  return (
    <header className="header sticky_header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wraaper d-flex justify-content-between align-items-center">
            <div className="logo">
            <img src={logo} alt=" sorry" />
            </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu} >
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav_links.map((item,index)=>(
                  <li className="nav_item" key={index}>
                          <NavLink to={item.path} className={navclass=>navclass.isActive?"active_link":""}>{item.display}</NavLink>
                  </li>
                ))
              }

            </ul>
          </div>

        <div className="nav_right d-flex align-items-center gap-4 ">
          <div className="nav_btns d-flex align-items-center gap-4">
            {
              user?<>
              <h5 className='mb-0'>{user.username}</h5>
              <Button className='btn btn-dark'to="/" onClick={logout}> Logout</Button>
              </>:<><Button className="btn secondary__btn"> 
            <Link to="/login">Login</Link>
            </Button>
            <Button className="btn primary__btn"> 
            <Link to="/register">Register</Link>
            </Button></>
            }
            
            
          </div>
          <span className="mobile_menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>

          </div>

        
        </Row>
      </Container>
    </header>
  )
}

export default Header