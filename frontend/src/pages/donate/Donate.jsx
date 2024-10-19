import React from 'react'
import './donate.css'
import Navbar from '../../components/navbar/Navbar'
import img1 from '../../assets/image.png'


const Donate = () => {
  return (
    <>
    <Navbar/>
    <div className='donation-wrapper'>
    <section class="donation-section">
    <div class="donation-container2">

        <div class="highlight-button">
          Donate with CCP
        </div>
    
      <img src={img1} alt="Algerie Poste Cheque"/>
      
      
      <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="file-upload" class="custom-file-upload">
          <i class="fa fa-cloud-upload"></i> import ur doc here
        </label>
        <input id="file-upload" type="file" name="document"/>
      </form>
    </div>
  </section>
  </div>
    </>
  )
}

export default Donate
