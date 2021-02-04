/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from './Buttons';
import Field from './Helpers/Field';
import Textarea from './Helpers/TextArea';
import NoteDisplay from './NoteDisplay';

const MarkdownInput = ({ handleSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClick = () => {
    const note = { title, content };
    handleSave(note);
  };

  console.log(title);
  return (
    <>
      <div className="preview">
        <NoteDisplay title={title} content={content} />
      </div>
      <div>
        <Field name="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
        <Textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} />
        <Button content="Sauvegarder" className="btn" onClick={handleClick} />
      </div>
    </>
  );
};

export default MarkdownInput;
