import React from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <nav>
        <ul>
          <li>Profile</li>
        </ul>
      </nav>
      <div>Main content</div>
    </div>
  );
};

export default App;
