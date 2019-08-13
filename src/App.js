import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Picture from './picture';

export default function App() {
  //const API_KEY = process.env.REACT_APP_API_KEY;
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState({ hits: [] });
  const [category, setCategory] = useState('category');
  const [savedImages, setSavedImages] = useState([]);

  const onInputChange = event => {
    setKeyword(event.target.value);
  };

  const onCategoryChange = event => {
    setCategory(event.target.value);
  };

  const onButtonClick = () => {
    const searchTerm = keyword === '' ? category : keyword;
    fetch(
      `https://pixabay.com/api/?key=11661514-e08042c2b0ec677b3c6338ea2&q=${searchTerm}&image_type=photo`
    )
      .then(response => response.json())
      .then(data => {
        setKeyword('');
        setData(data);
      });
  };

  useEffect(() => {
    if (savedImages && savedImages.length > 0)
      localStorage.setItem('savedImages', JSON.stringify(savedImages));
    console.log('savedImages', savedImages.length);
  }, [savedImages]);

  useEffect(() => {
    const saved = localStorage.getItem('savedImages');
    if (saved && saved.length > 0) {
      setSavedImages(JSON.parse(saved));
    }

    fetch(
      `https://pixabay.com/api/?key=11661514-e08042c2b0ec677b3c6338ea2&q=&image_type=photo`
    )
      .then(response => response.json())
      .then(data => {
        setKeyword('');
        setData(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1
        style={{
          marginTop: '35px',
          marginBottom: '35px',
          fontFamily: 'Libre Caslon Text',
          fontSize: '40px'
        }}
        className="ui center aligned header"
      >
        PixFinder
      </h1>
      <SearchBar
        onButtonClick={onButtonClick}
        onInputChange={onInputChange}
        keyword={keyword}
        onCategoryChange={onCategoryChange}
      />
      <div className="ui grid">
        <div className="ui stackable centered cards">
          {data.hits.map(picture => {
            return (
              <Picture
                url={picture.webformatURL}
                key={picture.id}
                alt={picture.tags}
                likes={picture.likes}
                favorites={picture.favorites}
                tags={picture.tags}
                link={picture.pageURL}
                saveImage={url => {
                  setSavedImages(prevSavedImages => [...prevSavedImages, url]);
                }}
                isSaved={
                  savedImages.filter(saved => saved === picture.webformatURL)
                    .length > 0
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
