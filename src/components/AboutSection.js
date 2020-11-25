//IMAGES
import home1 from '../img/home1.png'
//STYLED COMPONENTS
import styled from 'styled-components';
import {AboutStyled, DescriptionStyled, ImageStyled, Hide } from '../styles'


const AboutSection = () => {
  return ( 
    <AboutStyled>
      <DescriptionStyled>
        <div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span> come</h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in voluptatum ad ut neque possimus, velit laborum suscipiton.</p>
        <button>Contact Us</button>
      </DescriptionStyled>
      <ImageStyled>
        <img src={home1} alt="Guy With Camera"/>
      </ImageStyled>
    </AboutStyled>
  )
}

export default AboutSection;