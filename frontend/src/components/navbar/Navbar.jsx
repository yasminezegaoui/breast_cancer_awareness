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
        <p>
          <div className="logo" onClick={handleHomeClick}>
            <img src={logo} alt="Logo" /> Save Her<span> & </span>Him
          </div>
        </p>
        <ul className="nav-links">
          <li><p onClick={handleHomeClick}>Home</p></li>
          <li><p onClick={handleAboutClick}>About Us</p></li>
          <li><p onClick={handleClick}>Cancer Info</p></li>
          <li><p id="quiz-link" className="disabled" onClick={handleJoinClick}>Sympthom</p></li>
          <li><p id="blog-link" className="disabled" onClick={handleJoinClick}>Blog</p></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

