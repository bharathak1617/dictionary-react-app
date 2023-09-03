import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addWordToHistory } from '../Store/actions';
import { useDispatch } from 'react-redux';
import './navbar.css';
import WordDetails from './WordDetails';

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [word, setWord] = useState('');

  async function handleSearch() {
    if (word.trim() === '') {
      return "Type the words";
    }
    dispatch(addWordToHistory(word));
    navigate(`/word/${word}`);
  }

  return (
    <div className='nav-container'>
      <div>
        <input
          type="text"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
     
    </div>
  );
}

export default HomePage;
