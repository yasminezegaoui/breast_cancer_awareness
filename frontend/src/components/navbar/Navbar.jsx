import React from 'react'
import './navbar.css';
import logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cancer_info');
  };

  const handleHomeClick = () => {
    navigate('/home_page');
  };

  const handleJoinClick = () => {
    navigate('/login');
  };

  // const handleSympthomClick = () => {
  //   navigate('/self_examinatiom');
  // };

  const handleAboutClick = () => {
    navigate('/about_us');
  };

  // const handleBlogClick = () => {
  //   navigate('/blog');
  // };

  return (
    <>
      <nav className="navbar">
        <a href="#home">
          <div className="logo">
            <img src={logo} alt="Logo" /> Save Her<span> & </span>Him
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#home" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#about" onClick={handleAboutClick}>About Us</a></li>
          <li><a href="#cancer-info" onClick={handleClick}>Cancer Info</a></li>
          <li><a href="#signin" id="quiz-link" className="disabled" onClick={handleJoinClick}>Sympthom</a></li>
          <li><a href="#signin" id="blog-link" className="disabled" onClick={handleJoinClick}>Blog</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

