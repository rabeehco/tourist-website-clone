// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './style.css'

function Hero() {
  return (
   
    <div className="container ">
      <div className=" row justify-content-center mt-5 col-md-12 ">
        <div className="col-md-4 ">
          <h3 style={{ fontFamily: 'Sacramento, cursive'}} className='mb-4 sub'>Explore Your Travel</h3>
          <Helmet/>
          <h1  className='mb-3' style={{ fontFamily: 'Black Ops One, cursive', fontSize: '3.5em'}}>Trusted Travel <br/> Agency</h1>
          <p className='mb-5' style={{color:'grey'}}>I travel not to go anywhere, but to go. I travel for travel's sake the <br/> 
              great affair is to move.</p>
        <div className='d-inline'>
          <Button className='class="btn btn-primary"' variant="success">Contact Us</Button>{' '}
          <Button variant="outline-primary">Learn More</Button>
        </div>
        </div>

      <div className='col-md-5 ms-5'>

      <img className='mt-5 ms-5' style={{height:'90vh'}} src="https://codewithsadee.github.io/tourest/assets/images/hero-banner.png" alt="" />

      </div>
    </div>
  </div>
  )
}

export default Hero


 