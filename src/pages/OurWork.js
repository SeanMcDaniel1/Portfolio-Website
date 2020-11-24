import styled from "styled-components";
import { Link } from 'react-router-dom';

//IMAGES
import athlete from '../img/athlete-small.png';
import racer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png'

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete"/>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={racer} alt="athlete"/>
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="athlete"/>
        </Link>
      </Movie>
    </Work>
  )
}

const Work = styled.div`
  min-height: 100vh;
`

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

export default OurWork;