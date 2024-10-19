import React from 'react';
import './breastcancer.css';
import Navbar from '../../components/navbar/Navbar';
import IMG from '../../assets/téléchargé-1.png'

const BreastCancer = () => {
  return (
    <>
      <Navbar/>
      <div className='seaction-wrapper'>
        <div className="section-1-container">
            <div className="section-1-img">
                <img src={IMG} alt="" />
            </div>
            <div className='section-1-content'>
                <h1>Understanding Breast Cancer: A Shared Fight for Men and Women</h1>
                <p>Breast cancer is often associated with women, but it’s important to remember that this disease can affect both men and women. In this article, we’ll explore what breast cancer is, how it affects people of both genders, and how early detection, self-examination, and lifestyle changes can help. We’ll also discuss the importance of donating to support those battling this disease and the ways we can collectively fight it.</p>
                <h1>What is Breast Cancer?</h1>
                <p>Breast cancer is a type of cancer that starts in the cells of the breast. It occurs when cells in the breast grow uncontrollably, forming a tumor. While this condition is most commonly found in women, men also have breast tissue and can develop breast cancer, though it is rarer. Cancer can spread to other parts of the body if not detected early, which is why understanding the symptoms and early warning signs is critical for both men and women.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default BreastCancer
