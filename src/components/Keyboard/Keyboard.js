import React, { useState } from 'react';
import KeyboardKey from '../KeyboardKey';
import { getAlphabets, getNumbers, shuffle } from '../../helpers';

import './Keyboard.css';

const Keyboard = ({ setTextInput, textInput }) => {
  const numbers = getNumbers();
  const [alphabets, setAlphabets] = useState(getAlphabets());
  const [caps, setCaps] = useState(false);
  const [shift, setShift] = useState(false);
  const handleAlphabetClick = (key) => {
    setTextInput((input) => input + key);
    if (shift) {
      setShift(false);
    }
    const shuffled = shuffle(getAlphabets());
    setAlphabets(shuffled);
  };
  const handleCapsClick = () => {
    setCaps(!caps);
  };
  const handleShiftClick = () => {
    setShift(!shift);
  };
  const handleSpaceClick = () => {
    setTextInput((input) => input + ' ');
  };
  const handleDelete = () => {
    setTextInput((input) => input.slice(0, input.length - 1));
  };
  return (
    <div className='keyboard'>
      <KeyboardKey value='~' id='tilde' />
      {numbers.map((number) => (
        <KeyboardKey value={number} id='number' key={number} />
      ))}
      <KeyboardKey value='Tab' id='tab' />
      {alphabets.map((letter) => (
        <KeyboardKey
          key={letter}
          value={letter}
          id='alpha'
          onClick={handleAlphabetClick}
          caps={shift || caps}
        />
      ))}
      <KeyboardKey value='Caps Lock' id='caps' onClick={handleCapsClick} />
      <KeyboardKey value='Space' id='space' onClick={handleSpaceClick} />
      <KeyboardKey value='Shift' id='shift' onClick={handleShiftClick} />
      <KeyboardKey value='Shift' id='rshift' onClick={handleShiftClick} />
      <KeyboardKey value='Backspace' id='backspace' onClick={handleDelete} />
      <KeyboardKey value='Delete' id='delete' onClick={handleDelete} />
    </div>
  );
};

export default Keyboard;
