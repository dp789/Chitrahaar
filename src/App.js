import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import RecommendedVideos from './component/RecommendedVideos';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_page">
        <Sidebar/>
        <RecommendedVideos/>
      

      </div>

          </div>
  ); 
}

export default App;
