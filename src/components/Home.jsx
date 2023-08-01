import React from "react";
import BannerImage from "../images/category-1.jpg";
import "./Home.css";


function Home(){
    return(
        <section className="home-image-section">
      <div style={{ position: 'relative' }}>
        <img src={BannerImage} alt="Banner" style={{ width: '100%', height: '500px', borderRadius: '10px', boxShadow: 'white' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }}>
          {/* Add your cart content here */}
          <h2>MY CART</h2>
          <p>HOME  CART</p>
          {/* Add more cart items as needed */}
        </div>
      </div>
    </section>
        
    )
}

export default Home;