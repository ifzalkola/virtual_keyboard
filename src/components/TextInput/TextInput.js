import React from 'react';

import './TextInput.css';

const TextInput = ({ value = '' }) => {
  return <div id='text-input'>{value}</div>;
};

export default TextInput;
