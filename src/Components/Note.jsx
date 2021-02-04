/* eslint-disable react/prop-types */
import React from 'react';

const Note = ({ title, content }) => (
  <div className="note">
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

export default Note;
