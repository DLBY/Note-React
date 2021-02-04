/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import './App.scss';
import MarkdownInput from './Components/MarkdownInput';
import NoteViewer from './Components/NoteViewer';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleSave = (note) => {
    console.log(notes);
    let save = [];
    notes ? save = [...notes, note] : save = [note];
    setNotes(save);
    localStorage.setItem('notes', JSON.stringify(save));
  };

  useEffect(() => {
    let storedValues = localStorage.getItem('notes');
    storedValues = JSON.parse(storedValues);
    console.log(storedValues);
    setNotes(storedValues);
  }, [setNotes]);

  return (
    <div className="App">
      <div className="Left">
        <NoteViewer notes={notes} />
      </div>
      <div>
        <h2>Right</h2>
        <MarkdownInput handleSave={handleSave} />
      </div>
    </div>
  );
};

export default App;
