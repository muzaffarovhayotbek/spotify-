import React from 'react';
import back from '../assets/back.svg';
import forward from '../assets/forward.svg';
import './Like.css';
import likeUser from '../assets/like-user.svg';
import likeIconBtn from '../assets/like-iconBtn.svg';
import like from '../assets/like.png';
import mainIcon from '../assets/mainIcon.svg';
import LikeLike from '../assets/likeLike.svg';
import download from '../assets/download.svg';
import search from '../assets/searchLike.svg';
import clock from '../assets/clock.svg'
function Like() {
  return (
    <div className="like">
      <div className="container like__container">
        <div className="icons">
          <img src={back} alt="" width={40} />
          <img src={forward} alt="forward" width={40} />
        </div>
        <div className="like-btn">
          <button>
            <img src={likeUser} alt="" width={34} />
            davedirect3
            <img src={likeIconBtn} alt="" width={16} />
          </button>
        </div>
      </div>
      <div className="like-hero">
        <div className="container like-hero__container">
          <div className="like-left">
            <img src={like} alt="like" width={297} />
          </div>
          <div className="left-reight">
            <h6>PUBLIC</h6>
            <h4>PLAYLIST</h4>
            <h3>Liked Songs</h3>
          </div>
        </div>
        <div className="like-main">
          <div className="container like-main__container">
            <div className="like-main-header">
              <img src={mainIcon} alt="icon" width={72} />
              <img src={LikeLike} alt="like" width={52} />
              <img src={download} alt="download" width={52} />
            </div>
            <div className="like-main-select">
              <img src={search} alt="search" width={23} />
              <select className="select">
                <option>Custom order</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="like-title">
        <div className="container like-title__container">
          <h2># TITLE</h2>
          <h2>ALBUM</h2>
          <h2>DATE ADDED</h2>
          <img src={clock} alt="clock" width={28} />
        </div>
      </div>
    </div>
  );
}

export default Like;
