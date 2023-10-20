import img1 from '../assets/pic1.gif';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './mainpage.css';

const Mainpage = () => {
  const navigate = useNavigate(); 

  const handleNextClick = () => {
   
    navigate('/next');
  };
  
  return (
    <div className="container">


      <div className="image">
       <img src={img1} alt="" />
      </div>

      <div className="heading">
        <h2>Simplify HR Tasks</h2>
      </div>

      <div className="paragraph">
      <div className="center-text">
        TexlaCulture's People Care System is designed to Manage your HR tasks.
        </div>
      </div>
      
      <div >
      <button onClick={handleNextClick} className="button" >Next</button>
      </div>

    </div>
  );
};

export default Mainpage;



