import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    //<video src='/videos/video-2.mp4' autoPlay loop muted />
  return (
    <div className='hero-container'>
      <h1>Hi</h1> 
      <p>My name is Lidia Baciu</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;