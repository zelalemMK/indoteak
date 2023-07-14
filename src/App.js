import React from 'react';
import './App.css';
import Header from './components/header/header'; 
import MainBody from './components/main/body' // Path may vary based on your directory structure

function App() {
  return (
    <div className='app'>
      <Header />
      <MainBody />
    </div>
  );
}

export default App;