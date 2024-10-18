import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './singup.css';

const SignUp = () => {
  return (
    <div className='container' id='container'>
      <div className='form-container sign-up'>
        <form>
          <h1>SIGN UP</h1>
          <div className='social-icons'>
            <a href="google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
