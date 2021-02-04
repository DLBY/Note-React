import React, { useState } from 'react';
import Button from './Buttons';
import Field from './Helpers/Field';
import Textarea from './Helpers/TextArea';
import NoteDisplay from './NoteDisplay';
import useStateLocalStorage from './Helpers/LocalStorage';
import HandleSave from './Helpers/HandleSave';

const MarkdownInput = () => {
  const [title, setTitle] = useStateLocalStorage('title');
  const [content, setContent] = useStateLocalStorage('content');

  const handleClick = () => {
    let notes = localStorage.getItem('notes');
    if (!notes) {
      notes = [];
    } else {
      notes = JSON.parse(notes);
    }    
    const note = { title, content };
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const handleChange = (e) => {
    const nameInput = e.target.name;

    if (nameInput === 'title') {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };
  console.log(title);
  return (
    <div>
      <div>
        <NoteDisplay title={title} content={content} />
      </div>
      <div>
        <Field name="title" value={title} onChange={handleChange} type="text" />
        <Textarea name="content" value={content} onChange={handleChange} />
        <Button content="Sauvegarder" className="btn" onClick={handleClick} />
      </div>
    </div>
  );
};

export default MarkdownInput;
