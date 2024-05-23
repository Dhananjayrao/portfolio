import React from 'react';
import pxlSelf from './static/Saly-10.min.svg';

const Hero = () => {
  return (
    <div className='hero-section section-bg'>
        <div className='intro'>
            <h1>Hi, my name is <span className='title-highlight name-animate'>Dhananjaya Rao</span></h1>
            <img src={pxlSelf} className='img-animate' alt='pixel art'/>
        </div>
        <h3>I am primarily an experienced software and front-end web developer with proficiency in Python, Javascript and Java. I have recently graduated with a Master's of Science in Computer Science from The University of Florida and am <span className='title-highlight'>open to Fulltime Software Engineering and Web Development opportunities</span> in The USA!</h3>
    </div>
  )
}

export default Hero