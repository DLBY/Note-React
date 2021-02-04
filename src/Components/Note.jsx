/* eslint-disable react/prop-types */
import React from 'react';

const Note = ({ 
  title, content, index, handleDelete,
}) => (
  <div className="note" onDoubleClick={() => handleDelete(index)}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

export default Note;
