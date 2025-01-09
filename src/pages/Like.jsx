import React from 'react';
import back from '../assets/back.svg';
import forward from '../assets/forward.svg';
import './Like.css';
import likeIcon from '../assets/like-iconBtn.svg';
import likeUser from '../assets/like-user.svg';
import like from '../assets/like.png';

function Like() {
  return (
    <div className="like">
      <div className="container like__container">
        <div className="like-header">
          <div className="like-icons">
            <img src={back} alt="back" width={40} />
            <img src={forward} alt="back" width={40} />
          </div>
          <div className="like-left">
            <button>
              <img src={likeUser} alt="like" width={34} />
              davedirect3
              <img src={likeIcon} alt="like icon" width={16} />
            </button>
          </div>
        </div>
        <div className="like-hero">
          <div className="like-hero-img">
            <img src={like} alt="like img" width={297} />
          </div>
          <div className="like-hero-right">
            <div className="titles">
              <h2> PUBLIC</h2>
              <h2>PLAYLIST</h2>
            </div>
            <h3>Liked Songs</h3>
            <div className="titles-btn">
              <img src={likeUser} alt="like" width={30} />
              <h2>davedirect3</h2>
              <h6>34 songs</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Like;
