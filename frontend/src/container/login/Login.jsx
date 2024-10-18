/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import './login.css'

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className='login-container'>
    <div className={`container ${isActive ? 'active' : ''}`} id='container'>
      <div className='form-container sign-in'>
        <form>
          <h1>SIGN IN</h1>
          <div className='social-icons'>
            <a href="google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="google.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            {/* <a href="google.com">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="google.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a> */}
          </div>
          <span>or use your email for registration</span>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <a href="something">Forgot Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className='form-container sign-up'>
        <form>
          <h1>SIGN UP</h1>
          <div className='social-icons'>
            <a href="google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="google.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            {/* <a href="google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a> */}
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>Sign Up</button>
        </form>
      </div>
      <div className='toggle-container'>
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className='hidden' id='register' onClick={handleLoginClick}>Sign Up</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className='hidden' id='login' onClick={handleRegisterClick}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
