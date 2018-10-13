import React from 'react';

const ContactPage = () => {
  return(
    <div className='main-section'>
      <div className='header-image contact-image'>
      </div>
      <div className='background'>
        <div className='text-background'>
          <h2>Contact</h2>
          {/* <a>Call (832)-797-3894</a> */}
    
          {/* <a>Email JoExample@gmail.com</a> */}
          <p>
            Phone: 555-555-5555
            <br/><br/>
            Email: JoExample@gmail.com
          </p>
        </div>
        {/* <a href="/schedule">Schedule Dog Walk</a> */}
      </div>
    </div>
  )
};

export default ContactPage;