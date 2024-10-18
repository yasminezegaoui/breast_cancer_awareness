import React from 'react'
import './navbar.css';
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <a href="#home">
          <div className="logo">
            <img src={logo} alt="Logo" /> Save Her<span> & </span>Him
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#cancer-info">Cancer Info</a></li>
          <li><a href="#signup" id="quiz-link" className="disabled">Symptom Quiz</a></li>
          <li><a href="#signup" id="blog-link" className="disabled">Blog</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

