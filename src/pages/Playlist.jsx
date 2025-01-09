// src/pages/Playlist.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import back from '../assets/back.svg';
import forward from '../assets/forward.svg';
import chillMax from '../assets/chillMax.svg';
import daily from '../assets/daily.svg';
import folk from '../assets/folk.png';
import './Playlist.css';
import mainIcon from '../assets/mainIcon.svg';
import LikeLike from '../assets/likeLike.svg';
import download from '../assets/download.svg';
import search from '../assets/searchLike.svg';
import clock from '../assets/clock.svg';
function Playlist() {
  const location = useLocation();
  const { mix } = location.state || {};

  const getImage = (mix) => {
    switch (mix) {
      case 'Chill Mix':
        return chillMax;
      case 'Daily Mix 1':
        return daily;
      case 'Folk & Acoustic Mix':
        return folk;
      default:
        return null;
    }
  };

  return (
    <div className="playList">
      <div className="container">
        <div className="playlistIcon">
          <img src={back} alt="back" width={40} />
          <img src={forward} alt="forward" width={40} />
        </div>
        <div className="playlistMain">
          <img src={getImage(mix)} alt={mix} width={200} />
          <h6>{mix} </h6>
        </div>
        <div className="playlist-main-header">
          <img src={mainIcon} alt="icon" width={72} />
          <img src={LikeLike} alt="like" width={52} />
          <img src={download} alt="download" width={52} />
          <div className="playlist-main-select">
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
        <div className="playlist-section">
          <h2># TITLE</h2>
          <h2>ALBUM</h2>
          <h2>DATE ADDED</h2>
          <img src={clock} alt="clock" width={28} />
        </div>
        <div className="playlist-hr"></div>
      </div>
    </div>
  );
}

export default Playlist;
