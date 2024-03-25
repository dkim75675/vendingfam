import React from 'react';
import product1 from '../img/product1.png';
import product2 from '../img/product2.png';
import product3 from '../img/product3.jpeg';


const Products = () => {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-white font-extrabold text-3xl  bg-black pt-11 flex justify-center '>Products</h1>
      <li className='text-white  text-xl  bg-black pt-11 flex justify-center '>We proudly carry a variety of products from the traditional vending snacks and drinks as well as new healthier alternatives! </li>
      <li className='text-white  text-xl  bg-black pt-11 flex justify-center '>Our machines all are newer models and also come equipped with card readers that accept mobile payments, Visa, Mastercard and all other major cards.</li>
      <li className='text-white  text-xl  bg-black pt-11 pb-11 flex justify-center '>If you have any questions about products or specific requests, please fill out our contact form for more information.</li>
        <div className='flex flex-row justify-center'>
          <img  src={product1} alt="product1"/>
            <div className='flex flex-col justify-center'>
              <img className='onject-fill' src={product2} alt="product2"/>
              <img className='onject-fill' src={product3} alt="product3"/>
            </div>
        </div>
    </div>
  )
}

export default Products
