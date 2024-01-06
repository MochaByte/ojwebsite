import React from 'react';
import gif from '../assets/zing-dog-transparent.gif';
import './Styling/Home.css';
import backgroundVideo from '../AdobeBG.mov';


const Home = () => {
  return (
    <>
      <video src={backgroundVideo} autoPlay loop muted id='video'/>
      <div className='home'>
        <div className='home-content'>
          <img src={gif} alt="Dancing Dog" className="dancing-dog" />
          <h1>Welcome to the $ZING Coin Universe!</h1>
          <img src={gif} alt="Dancing Dog" className="dancing-dog" />
        </div>
        <p>Experience the joy and excitement of $ZING as we journey to the moon together.</p>
        <p>When your portfolio feels the Zing! 🚀💃 #ZingToTheMoon</p>
    </div>
  </>
  );
};

export default Home;
