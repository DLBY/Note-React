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

  const handleDelete = (index) => {
    localStorage.removeItem(notes[index]);
  };

  useEffect(() => {
    let storedValues = localStorage.getItem('notes');
    storedValues = JSON.parse(storedValues);
    console.log(storedValues);
    setNotes(storedValues);
  }, [setNotes]);

  return (
    <div className="App">
      <aside>
        <NoteViewer notes={notes} handleDelete={handleDelete} />
      </aside>
      <section>
        <div className="top">  </div>
        <MarkdownInput handleSave={handleSave} />
      </section>
    </div>
  );
};

export default App;
