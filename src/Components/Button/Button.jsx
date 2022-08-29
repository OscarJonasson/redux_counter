import React from 'react';
import classes from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
