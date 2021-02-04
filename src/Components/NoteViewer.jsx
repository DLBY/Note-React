/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Buttons';
import Note from './Note';

const NoteViewer = ({ notes }) => (
  <div>
    <Button content="Ajouter une note" className="btn" />
    {notes && notes.length > 0 && notes.map(({ 
      title, content,
    }) => <Note title={title} content={content} key={title} />)}
  </div>
);

export default NoteViewer;
