import React from 'react';
import './Left.css';
import leftIcon from '../assets/home.svg';
import search from '../assets/Search.svg';
import library from '../assets/library.svg';
import playlist from '../assets/playlist.svg';
import likeSong from '../assets/likeSong.svg';
import { NavLink } from 'react-router-dom';

function LeftSide() {
  return (
    <div className="leftSide">
      <div className="left-one">
        <img src={leftIcon} alt="home icon" />
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="left-search">
        <img src={search} alt="search icon" />
        <h2>Search</h2>
      </div>
      <div className="left-library">
        <img src={library} alt="library icon" />
        <h2>Your Library</h2>
      </div>
      <div className="left-playlist">
        <img src={playlist} alt="playlist icon" />
        <NavLink to="/playlist">Create Playlist</NavLink>
      </div>
      <div className="likeSong">
        <img src={likeSong} alt="" />
        <NavLink to="like">Like song</NavLink>
      </div>
      <div className="hr"></div>
      <div className="left-bar">
        <ul className="left-bar-list">
          <li>Chill Mix</li>
          <li>Insta Hits</li>
          <li>Your Top Songs 2021</li>
          <li>Mellow Songs</li>
          <li>Anime Lofi & Chillhop Music</li>
          <li>BG Afro “Select” Vibes</li>
          <li>Afro “Select” Vibes</li>
          <li>Happy Hits!</li>
          <li>Instrumental Study</li>
          <li>OST Compilations</li>
          <li>Nostalgia for old souled mill...</li>
          <li>Mixed Feelings</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSide;
