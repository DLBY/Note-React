/* eslint-disable react/prop-types */
import React from 'react';

const TextArea = ({
  name, value, onChange,
}) => (
  <div>
    <textarea value={value} onChange={onChange} id={name} name={name} className="form-text-area" />
  </div>
);

export default TextArea;
