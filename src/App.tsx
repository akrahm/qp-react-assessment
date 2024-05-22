import React, { useState } from 'react';
import './App.css';
import DenseAppBar from './Components/AppBar';
import TaskInputBase from './Components/SearchBar';

const App: React.FC = () => {

  return (
    <div className="App">
      <DenseAppBar />
      <TaskInputBase />
    </div>
  );
};

export default App;
