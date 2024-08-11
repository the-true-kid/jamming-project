import React from 'react';
import Tracklist from './Tracklist';
import './SearchResults.css';

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
