import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <d className={classes.Label}>{props.label}</d>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default buildControl;
