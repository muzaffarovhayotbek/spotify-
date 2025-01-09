
import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../assets/back.svg';
import forward from '../assets/forward.svg';
import './Home.css';
import chillMax from '../assets/chillMax.svg';
import daily from '../assets/daily.svg';
import folk from '../assets/folk.png';

function Home() {
  const navigate = useNavigate();

  const handleMixClick = (mix) => {
    navigate('/playlist', { state: { mix } });
  };

  return (
    <div className="home">
      <div className="container">
        <div className="header-icon">
          <img src={back} alt="back" width={40} />
          <img src={forward} alt="forward" width={40} />
        </div>
        <div className="hero">
          <h1>Good afternoon</h1>
        </div>
        <div className="main main__container">
          <div className="chillMax" onClick={() => handleMixClick('Chill Mix')}>
            <img src={chillMax} alt="Chill Mix" width={82} />
            <h2>Chill Mix</h2>
          </div>
          <div className="daily" onClick={() => handleMixClick('Daily Mix 1')}>
            <img src={daily} alt="Daily Mix 1" width={82} />
            <h2>Daily Mix 1</h2>
          </div>
          <div className="folk" onClick={() => handleMixClick('Folk & Acoustic Mix')}>
            <img src={folk} alt="Folk & Acoustic Mix" width={82} />
            <h2>Folk & Acoustic Mix</h2>
          </div>
        </div>
        <div className="section">
          <div className="section-head">
            <h2>Your top mixes</h2>
            <h6>SEE ALL</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
