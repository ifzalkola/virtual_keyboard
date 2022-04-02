import React, { useEffect, useRef } from 'react';

import './TextInput.css';

const TextInput = ({ value = '' }) => {
  /** Ref for text input */
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input component if there is a change in value ie a key was pressed
    inputRef.current.focus();
  }, [value]);

  return <input ref={inputRef} id='text-input' value={value}></input>;
};

export default TextInput;
