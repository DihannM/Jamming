import React, { useState } from "react";
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

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
  )  
};


export default App;
