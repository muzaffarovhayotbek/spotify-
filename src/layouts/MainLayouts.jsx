import React from 'react';
import LeftSide from '../components/Left';
import RightSide from '../components/Reight';
import './MainLayouts.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="left-side">
        <LeftSide />
      </div>

      <div className="main-content">{children}</div>

      <div className="right-side">
        <RightSide />
      </div>
    </div>
  );
};

export default MainLayout;
