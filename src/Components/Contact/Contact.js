import React from 'react';
import './Contactbox.css';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element className="contact" id="Contact" >
    <div className='contacts'>
        <div className='content'>
            <h2>Contact Us</h2>
            <p> 
            </p>
        </div>
 <div className='container'>
    <div className='contact-info'>
        <div className='box'>
            
                <div className='text'>
                    <h3>Address</h3>
                    <p>Pattamal street,Ganga Nagar ,krishan Apt's AnnaNagar Chennai-58</p>
                </div>
                <div className='box'>
                <div className='text'>
                    <h3>Phone</h3>
                    <p>444-3443-234</p>
                </div>
                <div className='box'>
           
                <div className='text'>
                    <h3>Email</h3>
                    <p>CaraBoutique@gmail.com</p>
                </div>

            </div>
        </div>
    </div>
    </div>
    </div>
</div>
 </Element>
    
  )
}

export default Contact