import React from 'react';
import './mainpage.css';


const Mobileview = () => {
 
  return (
    <div className='container1'>
      <div className="main">
      <span className='logo1'>TC</span>
      <span className='logo2'>TexlaCulture</span>
      </div>

      <div className='mob'>
        <h2>Verify Your Mobile Number</h2>
        <h5>Please enter code sent to your mobile number ending <br /> with ******3848</h5>
        
        <div className='input-container'>
          <div className='flag'>
            2
          </div>
          <div className='flag'>
            3
          </div>
          <div className='flag'>
            0
          </div>
          <div className='flag'>
            0
          </div>

          
        </div>
        
        <p className='help-text'>
         Didn't receive the code? <span className='blue-text'>Resend OTP 0:10sec</span>
        </p>
      </div>

     
     
      <div className='keyboard1'>
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
