import React, { useState, useCallback } from "react";
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const trackData = [
  {
    id: "1",
    name: "Bow Down",
    artist: "I Prevail",
    album: "Trauma"
  },
  {
    id: "2",
    name: "Hurricane",
    artist: "I Prevail",
    album: "Trauma"
  },
  {
    id: "3",
    name: "Girls Like You",
    artist: "Maroon 5",
    album: "Red Pill Blues"
  }
];

const App = () => {
  const [searchResults, setSearchResults] = useState(
    [
      {
        id: "1",
        name: "Bow Down",
        artist: "I Prevail",
        album: "Trauma"
      },
      {
        id: "2",
        name: "Hurricane",
        artist: "I Prevail",
        album: "Trauma"
      },
      {
        id: "3",
        name: "Girls Like You",
        artist: "Maroon 5",
        album: "Red Pill Blues"
      }
    ]
  );
  console.log(searchResults);

  const [playlistName, setPlaylistName] = useState("New Playlist");

  const [playlistTracks, setPlaylistTracks] = useState(
    [
      {
        id: "4",
        name: "Phone",
        artist: "Meduza",
        album: "Phone"
      },
      {
        id: "5",
        name: "Lose Control",
        artist: "Meduza",
        album: "Get To know "
      },
      {
        id: "6",
        name: "OK without you",
        artist: "Klaas",
        album: "Collected Part 2"
      }
    ]
  );

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
  });

  const search = useCallback((term) => {
    console.log(term);
  }, []);


  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack} 
          />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  )  
};


export default App;
