import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg';
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Manoj Nahak,</span>frontend developer based in India.</h1>
      <p>I am a frontend developer from Mumbai, India with 2 Year experiene in microsoft,google,tesla.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
