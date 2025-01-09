import React from 'react';
import user from '../assets/user.svg';
import './Reight.css';
import close from '../assets/close.svg';

function Reight() {
  return (
    <div className="right">
      <div className="right-head">
        <h2>Friend Activity</h2>
        <div className="right-icons">
          <img src={user} alt="user icon" width={32} />
          <img src={close} alt="close" width={56} />
        </div>
      </div>
      <div className="title">
        <p>
          Let friends and followers on Spotify see what you’re listening to.
        </p>
      </div>
      <div className="right-users"></div>
      <div className="right-foot">
        <h2>
          Go to Settings Social and enable “Share my listening activity on
          Spotify.’ You can turn this off at any time.
        </h2>
        <button>SETTINGS</button>
      </div>
    </div>
  );
}

export default Reight;
