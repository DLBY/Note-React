/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ 
  content, onClick,
}) => (
  <button type="button" className="btn" onClick={onClick}>{content}</button>
);

export default Button;
