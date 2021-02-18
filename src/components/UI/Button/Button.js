import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type="submit"
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
