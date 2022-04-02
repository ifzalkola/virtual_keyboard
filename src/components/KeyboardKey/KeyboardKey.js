import React from 'react';

import './KeyboardKey.css';

const KeyboardKey = ({ value, width, id, onClick, caps }) => {
  const handleKeyClick = (e) => {
    if (onClick) {
      onClick(caps ? value.toUpperCase() : value);
    }
  };
  return (
    <div className='key' style={{ width }} id={id} onClick={handleKeyClick}>
      {caps ? value.toUpperCase() : value}
    </div>
  );
};

export default KeyboardKey;
