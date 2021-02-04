import React from 'react';
import './App.scss';
import MarkdownInput from './Components/MarkdownInput';

const App = () => (
  <div className="App">
    <div className="Left">
      <h2>Left</h2>
    </div>
    <div>
      <h2>Right</h2>
      <MarkdownInput />
    </div>
  </div>
);

export default App;
