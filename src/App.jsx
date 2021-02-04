import React from 'react';
import './App.scss';
import MarkdownInput from './Components/MarkdownInput';
import NoteViewer from './Components/NoteViewer';

const App = () => (
  <div className="App">
    <div className="Left">
      <NoteViewer />
    </div>
    <div>
      <h2>Right</h2>
      <MarkdownInput />
    </div>
  </div>
);

export default App;
