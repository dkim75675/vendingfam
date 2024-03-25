import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css'

const EmailForm = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'VendingFam',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email', error);
            }
            );
    

    }


  return (
    <div>
      <h1 className='flex justify-center text-xl font-bold'>Contact Us</h1>
      <h3 className='flex justify-center text-lg basis-1/4'>Fill out the form below to ask about how to acquire vending services at your location today! If you are already using our services and have an emergeny, please call us at 404-383-0055</h3>
      <form onSubmit={handleSubmit} className= 'emailForm'>
        <input
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
           <input
            type="text"
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
            placeholder='message'
            cols='30'
            rows='10'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button className="bg-blue-500  text-white" type="submit">Send</button>


      </form>
    </div>
  )
}

export default EmailForm
