import React, { useEffect } from 'react';
import './blog.css';
import Navbar from '../../components/navbar/Navbar';
import post from '../../assets/post1.jfif';
import vid1 from '../../assets/vid1.mp4'
import vid2 from '../../assets/vid2.mp4'
import vid3 from '../../assets/Vid3.mp4'
import vid4 from '../../assets/Vid4.mp4'
import vid5 from '../../assets/vid5.mp4'
import vid51 from '../../assets/vid5-2.mp4'
import vid6 from '../../assets/vid6.mp4'
import vid7 from '../../assets/vid7.mp4'


const Blog = () => {
  useEffect(() => {
    // Generate random colors for profile pictures
    const profilePics = document.querySelectorAll('.profile-pic');
    profilePics.forEach(pic => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      pic.style.backgroundColor = randomColor;
    });
  }, []);

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
            <input type="radio" name="content-type" value="text" defaultchecked/> Text
          </label>
          <label class="radio-option">
            <input type="radio" name="content-type" value="image"/> Image
          </label>
          <label class="radio-option">
            <input type="radio" name="content-type" value="video"/> Video
          </label>
        </div>
  
       
        <label htmlFor="file-upload" class="custom-file-upload">
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
            <span class="username">Mounia</span>
          </div>
          <p>Les facteurs de risque de cancer du sein <span>#cancerfree</span></p>
          <video controls>
            <source src={vid1} type="video/mp4"/>
          </video>
          <div class="like-container">
            <button class="like-btn">
              <span class="like-icon">❤️</span> 
              <span class="like-count">0</span> Likes
            </button>
          </div>
        </div>

        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username">Mounia</span>
          </div>
          <p>Les facteurs de risque de cancer du sein <span>#cancerfree</span></p>
          <video controls>
            <source src={vid2} type="video/mp4"/>
          </video>
          <div class="like-container">
            <button class="like-btn">
              <span class="like-icon">❤️</span> 
              <span class="like-count">0</span> Likes
            </button>
          </div>
        </div>
        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username">Mounia</span>
          </div>
          <p>Les facteurs de risque de cancer du sein <span>#cancerfree</span></p>
          <video controls>
            <source src={vid3} type="video/mp4"/>
          </video>
          <div class="like-container">
            <button class="like-btn">
              <span class="like-icon">❤️</span> 
              <span class="like-count">0</span> Likes
            </button>
          </div>
        </div>
        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username">Mounia</span>
          </div>
          <p>Les facteurs de risque de cancer du sein <span>#cancerfree</span></p>
          <video controls>
            <source src={vid4} type="video/mp4"/>
          </video>
          <div class="like-container">
            <button class="like-btn">
              <span class="like-icon">❤️</span> 
              <span class="like-count">0</span> Likes
            </button>
          </div>
        </div>
        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username">Mounia</span>
          </div>
          <p>Les facteurs de risque de cancer du sein <span>#cancerfree</span></p>
          <video controls>
            <source src={vid5} type="video/mp4"/>
          </video>
          <div class="like-container">
            <button class="like-btn">
              <span class="like-icon">❤️</span> 
              <span class="like-count">0</span> Likes
            </button>
          </div>
        </div>

        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username">Mounia</span>
          </div>
          <p>Les facteurs de risque de cancer du sein <span>#cancerfree</span></p>
          <video controls>
            <source src={vid51} type="video/mp4"/>
          </video>
          <div class="like-container">
            <button class="like-btn">
              <span class="like-icon">❤️</span> 
              <span class="like-count">0</span> Likes
            </button>
          </div>
        </div>

        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username">Mounia</span>
          </div>
          <p>Les facteurs de risque de cancer du sein <span>#cancerfree</span></p>
          <video controls>
            <source src={vid6} type="video/mp4"/>
          </video>
          <div class="like-container">
            <button class="like-btn">
              <span class="like-icon">❤️</span> 
              <span class="like-count">0</span> Likes
            </button>
          </div>
        </div>

        <div class="post">
          <div class="post-header">
            <div class="profile-pic"></div> 
            <span class="username">Mounia</span>
          </div>
          <p>Les facteurs de risque de cancer du sein <span>#cancerfree</span></p>
          <video controls>
            <source src={vid7} type="video/mp4"/>
          </video>
          <div class="like-container">
            <button class="like-btn">
              <span class="like-icon">❤️</span> 
              <span class="like-count">0</span> Likes
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
  </div>
    </>
  )
}

export default Blog

