import React from 'react';
import './selfexamination.css';
import Navbar from '../../components/navbar/Navbar';
import Gift from '../../assets/Gift.png';
import Step1 from '../../assets/step_1.png'

const SelfExamination = () => {
  return (
    <>
    <Navbar/>
    {/* <div className='examination-wrapper'>
      <div className='examination-container'>
        <div className='examination-steps'>
          <div className='examination-numbers'>1</div>
          <div className='examination-numbers'>2</div>   
          <div className='examination-numbers'>3</div>   
          <div className='examination-numbers'>4</div>   
          <div className='examination-numbers'>
            <img src={Gift} alt="Gift" />
          </div>      
        </div>
        <div className='examination-card'>
          <h1 className='examination-card-title'>step 01</h1>
          <img src={Step1} alt="" />
          <p>1. stand in front of the mirror .check visually to see if there is any chaposition of breast and nipplesnge in size, shape, colour and position of breast and nipples .</p>
          <div className='examination-card-buttons'>
            <button className='button1'>everything is okay</button>
            <button className='button2'>I have one of these symptoms</button>
          </div>
        </div>    
      </div>
    </div> */}
    </>
  )
}

export default SelfExamination
