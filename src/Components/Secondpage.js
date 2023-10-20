import img2 from '../assets/pic2.gif'
import { useNavigate } from 'react-router-dom';
import './mainpage.css';

const Mainpage = () => {
  const navigate = useNavigate(); 

  const handleNextClick = () => {
   
    navigate('/mobile');
  };
  
  return (
    <div className="container">


      <div className="image2">
       <img src={img2} alt="" />
      </div>

      <div className="heading">
        <h2>Empower Your Workforce</h2>
      </div>

      <div className="paragraph">
      <div className="center-text">
    With TexlaCulture's Employee Management  System,
    unleash the true potential.
  </div>
      </div>
      <div >
      <button onClick={handleNextClick} className="button" >Get Started</button>
      </div>

    </div>
  );
};

export default Mainpage;



