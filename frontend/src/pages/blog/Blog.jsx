import React from 'react'
import './blog.css';
import Navbar from '../../components/navbar/Navbar';
import post from '../../assets/post1.jfif';
import vid1 from '../../assets/vid1.mp4'
import vid2 from '../../assets/vid2.mp4'
import vid3 from '../../assets/Vid3.mp4'
import vid4 from '../../assets/Vid4.mp4'
import vid5 from '../../assets/Vid5.mp4'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <div className='blog-wrapper'>
    <section class="blog-section">
    <div class="blog-container">
      <div class="highlight-button2"><h1>Share Your Experience</h1></div>
  
      
      <form action="/upload" method="post" enctype="multipart/form-data" class="upload-form">
        <textarea name="post-content" placeholder="Share your experience..." required></textarea>
  
        
        <div class="content-type">
          <label class="radio-option">
            <input type="radio" name="content-type" value="text" checked/> Text
          </label>
          <label class="radio-option">
            <input type="radio" name="content-type" value="image"/> Image
          </label>
          <label class="radio-option">
            <input type="radio" name="content-type" value="video"/> Video
          </label>
        </div>
  
       
        <label for="file-upload" class="custom-file-upload">
          Choose file
        </label>
        <input id="file-upload" type="file" name="post-file" accept="image/*,video/*"/>
  
        <button type="submit">Post</button>
      </form>
  
      
      <div class="posts-grid">
        
        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username"> Liz</span>
          </div>
          <p>This is an amazing support group. I’m feeling so grateful to be a part of this community.</p>
          <img src={post} alt="User post"/>
        </div>
  
        
        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username"> Asma</span>
          </div>
          <p> What is breast cancer <span>#doctor #forHERandHIM</span></p>
          <video controls>
            <source src={vid1} type="video/mp4"/>
          </video>
        </div>

        <div class="post">
            <div class="post-header">
              <div class="profile-pic"></div> 
              <span class="username"> Mounia </span>
            </div>
            <p> Les facteurs de risque de cancer du sein<span> #cancerfree</span></p>
            <video controls>
              <source src={vid2} type="video/mp4"/>
            </video>
          </div>
          <div class="post">
            <div class="post-header">
              <div class="profile-pic"></div> 
              <span class="username"> Celia</span>
            </div>
            <p>Qu’est-ce que le cancer du sein?</p>
            <video controls>
              <source src={vid3} type="video/mp4"/>
            </video>
          </div>
          <div class="post">
            <div class="post-header">
              <div class="profile-pic"></div> 
              <span class="username"> Ahmed</span>
            </div>
            <p>Arwah nfehmek f cancer du sein<span> #wi9ayakhirmen3ilaj #dz</span></p>
            <video controls>
              <source src={vid4} type="video/mp4"/>
            </video>
          </div>
          <div class="post">
            <div class="post-header">
              <div class="profile-pic"></div> 
              <span class="username"> Chanez</span>
            </div>
            <p></p>
            <video controls>
              <source src={vid5} type="video/mp4"/>
            </video>
          </div>
      </div>
    </div>
  </section>
  </div>
    </>
  )
}

export default Blog
