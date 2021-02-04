/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = ({ title, content }) => {
  const converter = new Showdown.Converter();
  const noteContent = converter.makeHtml(content);

  const createMarkup = (text) => (
    { __html: text }
  );

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={(createMarkup(noteContent))} />
    </>
  );
};

export default NoteDisplay;
