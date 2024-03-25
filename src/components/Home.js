import React from 'react';
import Logo from '../img/Logo.jpg';
import LocationServices from './LocationServices';


const Home = () => {
  return (
    <div>
        <img src={Logo} alt="logo" />
        <LocationServices/>
    </div>
  )
}

export default Home
