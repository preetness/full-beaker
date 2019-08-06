import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';

export default function App() {
  const [keyword, setKeyword] = useState('');

  const onInputChange = event => {
    setKeyword(event.target.value);
  };
  return (
    <div className="App ui container">
      <h1 className="ui center aligned header">Full Beaker Code Challenge</h1>
      <h3>{keyword}</h3>
      <SearchBar onInputChange={onInputChange} keyword={keyword} />
    </div>
  );
}
