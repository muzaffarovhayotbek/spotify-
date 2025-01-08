import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayouts';
import Like from './pages/Like';
import Playlist from './pages/Playlist';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home></Home>
          </MainLayout>
        }
      />
      <Route path='/like' element = {<MainLayout><Like></Like></MainLayout>}></Route>
      <Route path='/playList' element = {<MainLayout><Playlist></Playlist></MainLayout>}></Route>
    </Routes>
  );
}

export default App;
