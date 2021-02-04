import React, { useEffect, useState } from 'react';
import Button from './Buttons';
import Note from './Note';

const NoteViewer = () => {

  const useStickyState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
      const stickyValue = localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  };

  const notes = useStickyState([], 'notes');

  return (
    <div>
      <Button content="Ajouter une note" className="btn" />
      {notes && notes[0].map(({ 
        title, content,
      }) => <Note title={title} content={content} key={title} />)}
    </div>
  );
};

export default NoteViewer;
