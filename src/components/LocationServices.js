import React from 'react';
import img3 from '../img/img3.jpg';


const LocationServices = () => {
  return (
    <>
    <div className='flex flex-row justify-end bg-blue-500 text-white'>
        <div className='flex flex-col basis-1/2 pt-10 me-10'>
          <ul className='flex justify-center pb-5 font-bold'>We proudly service the metro atlanta area. Listed below are the counties we currently service. For more questions please contact us today!</ul>
          <li className='ps-11'>Cobb County</li>
          <li className='ps-11'>Dekalb County</li>
          <li className='ps-11'>Fulton County</li>
          <li className='ps-11'>Gwinnett County</li>
          <li className='ps-11'>Rockdale County</li>
        </div>
        <img className='onject-fill' src={img3} alt="img3"/>
      </div>
    </>
  )
}

export default LocationServices
