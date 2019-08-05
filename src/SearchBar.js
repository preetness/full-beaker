import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <div class="ui fluid icon input">
        <input type="text" placeholder="Keyword" />
      </div>
      <div>
        <select class="ui fluid search dropdown" multiple="">
          <option value="" disabled selected>
            Category
          </option>
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
      <div>
        <button class="fluid ui button">Search</button>
      </div>
    </div>
  );
}
