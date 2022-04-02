import { useState } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import TextInput from './components/TextInput/TextInput';

function App() {
  const [textInput, setTextInput] = useState('');
  return (
    <div className='App'>
      <TextInput value={textInput} />
      <Keyboard setTextInput={setTextInput} textInput={textInput} />
    </div>
  );
}

export default App;
