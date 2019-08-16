import React from 'react';

const errorStyle = {
  display: 'block',
  textAlign: 'left',
  color: 'red',
  padding: '0 .4em',
  marginBottom: '1em',
}

export default function ({ message }) {
  return (
    <span style={errorStyle}>
      {message}
    </span>
  );
}