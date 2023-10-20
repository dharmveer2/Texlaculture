import React from 'react';
import './mainpage.css';

import { useNavigate } from 'react-router-dom';

const Mobileview = () => {
  const navigate = useNavigate(); 

  const handleNextClick = () => {
   
    navigate('/otp');
  };
  return (
    <div className='container1'>
      <div className="main">
      <span className='logo1'>TC</span>
      <span className='logo2'>TexlaCulture</span>
      </div>

      <div className='mob'>
        <h2>Mobile Number</h2>
        <h5>We'll send you a one-time verification code.</h5>
        
        <div className='input-container'>
          <div className='flag'>
           
            🇮🇳 +91
          </div>
          <div >
          <input className='inp' type='text' placeholder='Enter your Mobile here' />
          </div>
          
        </div>
        
        <p className='terms'>
          By Continuing, I agree to the <span className='blue-text'>Terms of Use & Privacy Policy</span>
        </p>
        
        <button onClick={handleNextClick} className='get-otp-button'>Get OTP</button>
        
        <p className='help-text'>
          Having Trouble Logging in? <span className='blue-text'>Get Help</span>
        </p>
      </div>

     
     
      <div className='keyboard'>
  <div className='row'>
    <button className='key'>1</button>
    <button className='key'>
      2
      <div className='sub-label'>ABC</div>
    </button>
    <button className='key'>3
    <div className='sub-label'>DEF</div>
    </button>
  </div>

  <div className='row'>
    <button className='key'>4
    <div className='sub-label'>GHI</div>
    </button>
    <button className='key'>5   <div className='sub-label'>JKL</div>
    </button>
    <button className='key'>6   <div className='sub-label'>MNO</div>
    </button>
  </div>
  <div className='row'>
    <button className='key'>7   <div className='sub-label'>PQRST</div>
    </button>
    <button className='key'>8 <div className='sub-label'>UVW</div>
    </button>
    <button className='key'>9 <div className='sub-label'>XYZ</div></button>
  </div>
  <div className='row'>
    <button className='key'>0</button>
    <button className='symbol-key'>x</button>
  </div>
</div>


    </div>
  )
}

export default Mobileview;
