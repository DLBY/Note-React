/* eslint-disable react/prop-types */
import React from 'react';

const Field = ({
  name, value, onChange,
}) => (
  <div>
    <input autoComplete="off" type="text" value={value} onChange={onChange} id={name} name={name} className="form-text-title" />
  </div>
);

export default Field;
