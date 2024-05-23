import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { User } from './User'

export const About = () => {
    // const navigate=useNavigate
  return (
    <div>
    <div className='container'>
      <h1><span style={{color:'red', textDecoration:'underline black'}}>  Planning and Research</span></h1>
        <p className='para'>
Define Your Audience: Determine the demographics and preferences of your target audience.<br></br>
Identify Competitors: Analyze other T-shirt websites to understand market trends and identify areas for differentiation.<br></br>
Set Goals: Determine the primary objectives of your website, such as increasing sales, brand awareness, or customer engagement.<br></br>
Choose a Platform: Decide whether to build your website from scratch or use an e-commerce platform like Shopify, WooCommerce, or Magento.
</p>
        <img  id='img' src='https://img.freepik.com/free-photo/portrait-attractive-mature-concentrated-fashion-designer-sitting-his-workshop-looking-aside-holding-chin-with-hand-thinking-about-theme-clothes-collection_176420-11846.jpg?t=st=1716446184~exp=1716449784~hmac=8e63c68b54a5d8e23e644e5903b91a7916bde206cbb6816ee6cadc56e242850e&w=900' alt='..'/>

        </div>
        <div className='container1'>
        <h1><span style={{color:'red', textDecoration:'underline black'}}>
        Design</span>
</h1>
        <p id='para1'> Brand Identity: Develop a unique brand identity, including logo, color scheme, and typography.
User Interface (UI) Design: Design a visually appealing and user-friendly interface for your website, including navigation, product pages, and checkout process.
Responsive Design: Ensure your website is optimized for various devices, including desktops, laptops, tablets, and smartphones.
Product Photography: Capture high-quality images of your T-shirts from multiple angles to showcase them effectively on your website</p>
<img id='img1' src='https://img.freepik.com/free-photo/future-mother-keeps-shirt-baby_8353-5130.jpg?t=st=1716446240~exp=1716449840~hmac=74b8cb669aa83bc0fadc4d47a76d5e432950b9683a5847237aa00396daad36db&w=900' alt='...'/>

</div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{marginTop:"20px"}} src="https://img.freepik.com/free-photo/travel-composition-with-clothing-travel-equipment_7939-3240.jpg?t=st=1716446903~exp=1716450503~hmac=913359b8bba4bc0cf3377dae95e61afa0a36e951a3e6c1dbcc7ba24735dccd75&w=900" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{marginTop:"20px"}} src="https://img.freepik.com/free-psd/flat-design-fashion-template_23-2150070756.jpg?t=st=1716447222~exp=1716450822~hmac=4a90a6e1955e63e8b0e599252232f53b1b2d5514926540b09799b8f85160b636&w=1060" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{marginTop:"20px"}} src="https://img.freepik.com/free-vector/abstract-dirty-grunge-distressed-texture-background_21799-2675.jpg?t=st=1716447519~exp=1716451119~hmac=04042aab5d67643ff8edeee668cb68d199a2b7c46e1117d50bc9677e9e6f954c&w=826" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>

        
      

    
  )
}