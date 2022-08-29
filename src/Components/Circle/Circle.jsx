import React from 'react';
import classes from './Circle.module.css';
const Circle = ({ number }) => {
  return (
    <div className={classes.circle}>
      <p className={classes.number}>{number}</p>
    </div>
  );
};

export default Circle;
