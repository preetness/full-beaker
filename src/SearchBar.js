import React from 'react';

export default function SearchBar(props) {
  return (
    <div>
      <div className="ui fluid input">
        <input
          onChange={props.onInputChange}
          type="text"
          placeholder="Keyword"
          value={props.keyword}
          style={{ marginBottom: '15px' }}
        />
      </div>
      <div>
        <select
          className="ui fluid search dropdown"
          multiple=""
          onChange={props.onCategoryChange}
          style={{ marginBottom: '15px' }}
        >
          <option value="">Category</option>
          <option value="animals">Animals</option>
          <option value="backgrounds">Backgrounds</option>
          <option value="buildings">Buildings</option>
          <option value="business">Business</option>
          <option value="computer">Computer</option>
          <option value="education">Education</option>
          <option value="fashion">Fashion</option>
          <option value="feelings">Feelings</option>
          <option value="food">Food</option>
          <option value="health">Health</option>
          <option value="industry">Industry</option>
          <option value="music">Music</option>
          <option value="nature">Nature</option>
          <option value="people">People</option>
          <option value="places">Places</option>
          <option value="religion">Religion</option>
          <option value="transportation">Transportation</option>
          <option value="travel">Travel</option>
          <option value="science">Science</option>
        </select>
      </div>

      <button
        type="submit"
        style={{ marginBottom: '50px' }}
        onClick={props.onButtonClick}
        className="fluid ui green button"
      >
        Search
      </button>
    </div>
  );
}
