import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/tauri';
import './App.css';
import Header1 from './components/header1';
function App() {
  return (
    <div className="header">
      {/* <Header /> */}
      <Header1 />
    </div>
  );
}

export default App;
