/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Buttons';
import Note from './Note';

const NoteViewer = ({ notes, handleDelete }) => (
  <div>
    <Button content="Ajouter une note" className="btn" />
    {notes && notes.length > 0 && notes.map(({ 
      title, content,
    }, index) => <Note title={title} content={content} key={index} handleDelete={handleDelete} index={index} />)}
  </div>
);

export default NoteViewer;
