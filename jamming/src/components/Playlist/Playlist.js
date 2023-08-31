import React from 'react';
import './Playlist.css';

const Playlist = (props) => {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;