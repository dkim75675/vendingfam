import React from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg'

const AboutUs = () => {
  return (
   <>
   <div className='flex flex-row mb-5'>
        <div className='flex flex-col'>
          <h2 className='underline font-bold text-4xl flex justify-center py-5 mt-11'>Introduction</h2>
          <ul className='flex justify-center mx-5'>
            The Vending Fam LLC. is Georgia’s premiere vending service! We aim to provide great customer service while treating every customer like they are a part of our family; providing quality vending services with a personal touch. The Vending Fam is easily accessible to all businesses and individuals looking for vending services.
            Keeping our machines well stocked, clean, and fully operational is our #1 priority. We provide various vending options, from; snacks, drinks, hot and cold beverages, frozen food, and any other products to meet our customer’s needs. 
          </ul>
        </div>
        <img src={img1} alt="img1" />
    </div>

    <div className='flex flex-row'>
        <img src={img2} alt="img2" />
        <div className='flex flex-col'>
          <h2 className='underline font-bold text-4xl flex justify-center py-5 mt-11'>Who We Are</h2>
          <ul className='flex justify-center mx-5 mb-5'>The Vending Fam LLC. is a family owned and operated vending company that puts the needs of those we serve ahead of any other value. Our home-grown and operated business is fully insured and working daily to ensure growth.</ul>
                <li className="py-2 mx-11">We carry various options of brand name traditional and health conscious choices.</li>
                <li className="py-2 mx-11">Premier customer service with exceptional vending assistance is our expertise.</li>
                <li className="py-2 mx-11 mb-5">We offer personalized and detailed programs that are established to meet the specific and personalized needs of each client. The client’s needs are what we strive to meet and regardless of the request we will ensure we produce. </li>
          <ul className='flex justify-center mx-5 mb-5'>Our main objective is to ensure that our clients are provided with superior and cost-effective vending services. Our client’s, which we see as family, are fully equipped with the resources to ensure that patrons and customers who frequent their establishment receive the best service. We provide cost effective service that improves customer retention and also elevates the mood of the work environment.   </ul>
        </div>
    </div>
    </>
  )
}

export default AboutUs
