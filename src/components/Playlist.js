import React from 'react';
import Tracklist from './Tracklist';
import './Playlist.css';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {
  // Handle playlist name change
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className="Playlist">
      <input 
        value={playlistName} 
        onChange={handleNameChange} 
        className="Playlist-name"
        placeholder="Enter playlist name"
      />
      <Tracklist 
        tracks={playlistTracks} 
        onRemove={onRemove} 
        isRemoval={true} 
      />
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
