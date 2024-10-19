import React, { useState } from 'react';
import './login.css'
import axios from 'axios';

const Login = () => {
  const handleRegisterClick = async () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };  
  const [isActive, setIsActive] = useState(false);
  
  const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
      });
    
    

  const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
      };


  const handleSubmit1 = async (event) =>{
    event.preventDefault();
    try{
        console.log(userData);
        
        const response = await axios ({
          method:'POST',
          url:'http://localhost:4000/auth/signup',
          headers:{ 'Content-Type': 'application/json' },
          mode: 'cors',
          data: JSON.stringify(userData)
        })
        const data = await response.data
        if(!response.status){
        throw new Error(data.message);
        }
        console.log('singed up successfully:', data);
        window.location.href = '/home-page'
        
      }
      catch(error){
        const divErr = error.response.data.error
        console.log(divErr);
        const errorDivs = document.querySelectorAll('.error');  
        errorDivs.forEach(div => div.textContent = '');        
        
        for (const [field, message] of Object.entries(error.response.data.error)) {         
          const errorDiv = document.querySelector(`.${field}.error`);    
          if (errorDiv) {
            errorDiv.textContent = message;                              
            }
          } 
      }
  
    }
    const [userData1, setUserData1] = useState({
        email:'',
        password:''
      })
    const handleChange1 = (event) => {
        setUserData1({ ...userData1, [event.target.name]: event.target.value });
      };
      const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
        console.log(userData1)
        const response = await axios({
            method: 'POST',
            url:'http://localhost:4000/auth/login', 
            headers:{ 'Content-Type': 'application/json' },
            mode:'cors',
            data: JSON.stringify(userData1)
            });
        console.log(response)
        const data = response.data;
        setUserData(data)
        if (data) {
          console.log(`${data.credentials} has logged in!`);
          window.location.href = '/home-page';
        } else if(data.errors) {    
            console.log(data.errors);
            }
            } 
        catch(error){
          const divErr = error.response.data.errs
          console.log(divErr);
    
          const errorDivs = document.querySelectorAll('.error');  
          errorDivs.forEach(div => div.textContent = '');          
          for (const [field, message] of Object.entries(divErr)) {
            const errorDiv = document.querySelector(`.${field}.error`); 
            if (errorDiv) {
              errorDiv.textContent = message;                           
            }
          }
       
        }
    
    
    
        }


  return (
    <>
    <div className='login-container'>
    <div className={`container ${isActive ? 'active' : ''}`} id='container'>
      <div className='form-container sign-up'>
        <form>
          <h1>SIGN IN</h1>
          
          <input type="email" placeholder='Email' name='email'  onChange={handleChange1}/>
          <div className="email1 error"></div>
          <input type="password" placeholder='Password' name='password'  onChange={handleChange1}/>
          <div className="password1 error"></div>
          <a href="something">Forgot Your Password?</a>
          <button onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
      <div className='form-container sign-in'>
        <form>
          <h1>SIGN UP</h1>
          <input type="name" placeholder='Name' name='username'  onChange={handleChange}/>
          <div className="username error"></div>
          <input type="email" placeholder='Email' name='email'  onChange={handleChange}/>
          <div className="email error"></div>
          <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
          <div className="password error"></div>
          <button onClick={handleSubmit1}>Sign Up</button>
        </form>
      </div>
      <div className='toggle-container'>
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className='hidden' id='login' onClick={handleLoginClick}>Sign Up</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className='hidden' id='register' onClick={handleRegisterClick}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login

