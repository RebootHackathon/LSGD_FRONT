import React from 'react';
import classes from './Spinner.css';
import Elephant from '../../assets/lottie/elephantanimation.json'
import Lottie from 'react-lottie'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Elephant,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Spinner=()=>(
    <div > <Lottie options={defaultOptions}
    height={300}
    width={300}
/></div>
)

export default Spinner;