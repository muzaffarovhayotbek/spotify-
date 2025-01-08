import React from 'react';
import './Reight.css';
import user from '../assets/user.svg';
import close from '../assets/close.svg';

function Right() {
  return (
    <div className="right-side">
      <div className="right-header">
        <h2>Friend Activity</h2>
        <div className="right-icons">
          <img src={user} alt="user" width={32} />
          <img src={close} alt="close" width={32} />
        </div>
        <h2>
          Let friends and followers on Spotify see what you’re listening to.
        </h2>
        <div className="reight-main">
          <h2>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</h2>
          <button>SETTINGS</button>
        </div>
      </div>
    </div>
  );
}

export default Right;
