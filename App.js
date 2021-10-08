import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import Header from './components/Header'
import images from './images copy/img-3.jpg'
import Describe from './components/Describe'
import SettingUp from './components/SettingUp'
import Budget from './components/Budget'
import TaskPost from './components/TaskPost';

function App() {
  return (
      <div className='background'style={{backgroundImage: `url(${images})`}}>
      <Navbar />
      <Header />
      <Describe />
      <SettingUp />
      <Budget />
      <TaskPost/>
      </div>
    
  )
}

export default App;
