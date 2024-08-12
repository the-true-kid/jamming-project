import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'spotify:track:1czLCvl9wlBix1BwRhVXjH' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2', uri: 'spotify:track:2TpxZ7JUBn3uw46aR7qd6V' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3', uri: 'spotify:track:3n3Ppam7vgaVa1iaRUc9Lp' },
  ]);
  

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(currentTrack => currentTrack.id !== track.id));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    console.log(`Saving playlist: ${playlistName} with tracks: ${trackURIs}`);
    
    // You would typically call a Spotify API method here to save the playlist
    // For example:
    // Spotify.savePlaylist(playlistName, trackURIs);
  
    // Resetting the playlist after saving
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  };
  
  const search = (term) => {
    console.log(`Searching for ${term}`);
    // Implement search functionality with Spotify API here
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
