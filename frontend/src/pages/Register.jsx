import React ,{useState,useContext} from 'react'
import "../Styles/login.css";
import {Container,Col,Row,Button,Form,FormGroup} from "reactstrap"
import { Link,useNavigate } from 'react-router-dom';
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png"
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from '../utils/config';
const Register = () => {
  
  const [credentials,setCredential]=useState({
    username:"",
    email:"",
    password:""
   
})
const {dispatch} =useContext(AuthContext);
const navigate =useNavigate();

  const handelChange= async (e)=>{
    console.log(credentials)
    setCredential(prev=>({...prev,[e.target.id]:e.target.value}))
};
  
const handleClick= async e=>{
  e.preventDefault();
  try {
    const options = {
      mode: 'no-cors',
      method: "post",
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
     
  }
  console.log(credentials)
    const res=await fetch("http://localhost:8000/api/v1/auth/register",options)
    

    const result=await res.json();
    if(!res.ok) alert(result.message)
    dispatch({type:"REGISTER_SUCCESS"})
  navigate('/login')

  } catch (error) {
    navigate('/home')
    alert(Register Successfully)
  }
}

return (
    <section> <Container>
      <Row>
        <Col lg="8" className='m-auto'>
          <div className="login_container d-flex justify-content-between">
            <div className="login_img">
              <img src={registerImg} alt="" />
            </div>
          <div className="login_form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Register</h2>
            <Form onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='username' required id="username" onChange={handelChange}/>
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder='Email' required id="email" onChange={handelChange}/>
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder='Password' required id="password" onChange={handelChange}/>
              </FormGroup>
              <Button className='btn secondary__btn auth_btn' type='submit'>create Account</Button>
            </Form>

            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>

          </div>
        </Col>
      </Row>
      </Container>
      </section>
  )
}

export default Register;
