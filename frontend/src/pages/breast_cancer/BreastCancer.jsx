import React from 'react';
import './breastcancer.css';
import Navbar from '../../components/navbar/Navbar';
import IMG from '../../assets/téléchargé-1.png';
import heros from '../../assets/last-1.png';
import design from '../../assets/Design.png'

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
                <h2>Understanding Breast Cancer: A Shared Fight for Men and Women</h2>
                <p>Breast cancer is often associated with women, but it’s important to remember that this disease can affect both men and women. In this article, we’ll explore what breast cancer is, how it affects people of both genders, and how early detection, self-examination, and lifestyle changes can help. We’ll also discuss the importance of donating to support those battling this disease and the ways we can collectively fight it.</p>
                <h2>What is Breast Cancer?</h2>
                <p>Breast cancer is a type of cancer that starts in the cells of the breast. It occurs when cells in the breast grow uncontrollably, forming a tumor. While this condition is most commonly found in women, men also have breast tissue and can develop breast cancer, though it is rarer. Cancer can spread to other parts of the body if not detected early, which is why understanding the symptoms and early warning signs is critical for both men and women.</p>
            </div>
        </div>
        <br />
        <div className='section-2-content'>
          <div className='section-2-left'>
            <h2>How Many People Get Breast Cancer</h2>
            <p>Breast cancer is one of the most common cancers worldwide. According to global statistics:</p>
            <p>Women: Around 1 in 8 women will be diagnosed with breast cancer in their lifetime. It is the most frequently diagnosed cancer among women globally.</p>
            <p>Men: Although less common, around 1 in 833 men will develop breast cancer. Men tend to be diagnosed at later stages because the symptoms are often ignored or misunderstood, making awareness critical.</p>
            <p>The earlier breast cancer is detected, the better the chances of successful treatment.</p>
            <h2>The Importance of Self-Examination</h2>
            <p>One of the simplest and most effective ways to catch breast cancer early is through regular self-examinations. By checking for lumps, changes in breast size, or skin abnormalities, individuals can detect potential issues before they become severe.</p>
            <p>To make this easier, we offer an interactive 2D self-examination tool on our website. This tool guides both men and women through the steps of examining their breasts for signs of concern, helping you become familiar with your body and notice any unusual changes early on. Remember, honesty is key during the self-examination process—there’s no need to rush or skip steps. Early detection can save lives.</p>
          </div>
          {/* <div className='section-2-middle'>
            <img src={heros} alt="" />
          </div> */}
          <div className='section-2-right'>
            <h2>How to Protect Yourself from Breast Cancer</h2>
            <p>While there is no guaranteed way to prevent breast cancer, certain lifestyle changes can reduce your risk:</p>
            <p>Maintain a healthy diet: A balanced diet rich in fruits, vegetables, and whole grains can lower the risk of many cancers, including breast cancer.</p>
            <p>Exercise regularly: Physical activity helps maintain a healthy weight, which is linked to lower breast cancer risk.</p>
            <p>Limit alcohol consumption: Studies have shown that alcohol increases the risk of breast cancer in both men and women.</p>
            <p>Avoid smoking: Smoking has been linked to a higher risk of breast cancer</p>
            <p>Know your family history: If breast cancer runs in your family, talk to your doctor about additional screening options.</p>
          </div>
        </div>
        <div className='section-3-content'>
          <div className='paragraphs'>
            <h2>How to Fight Breast Cancer</h2>
            <p id='par'>Fighting breast cancer involves a combination of personal responsibility, community support, and medical advancements. Here are ways you can actively fight against breast cancer:</p>
            <p>1. Regular Screenings: Schedule routine mammograms and checkups, especially if you’re at higher risk.</p>
            <p>2. Education: Share knowledge about breast cancer with your community. The more people know, the better prepared they are to act early.</p>
            <p>3. Support: Whether through donating, volunteering, or simply offering emotional support to someone going through treatment, every action counts.</p>
            <p>4. Self-Care: Take charge of your own health by maintaining a lifestyle that promotes well-being and lowers your cancer risk.</p>
          </div>
          <div className='section-3-img'>
            <img src={design} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BreastCancer
