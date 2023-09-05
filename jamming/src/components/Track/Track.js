import React, {useCallback, useRef, useState} from 'react';
import "./Track.css";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const Track = (props) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = React.createRef();

    const handlePlay = () => {
        audioRef.current.play();
        setPlaying(true);
    }

    const handlePause = () => {
        audioRef.current.pause();
        setPlaying(false);
    }

    const addTrack = useCallback(
        () => {
          props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        () => {
          props.onRemove(props.track);
        },
        [props.onRemove, props.track]
      );

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                    -
                </button>
            );
        } else {
            return (
                <button className="Track-action" onClick={addTrack}>
                    +
                </button>
            );
        };
    };

    const renderPreviewAction = () => {
        if(playing) {
            return (
                <PauseCircleIcon onClick={handlePause}/>
            );
        } else {
            return (
                <PlayCircleIcon  onClick={handlePlay}/>
            )
        }
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            <audio ref={audioRef} src={props.track.preview_url} type="audio/mpeg"></audio>
            {renderPreviewAction()}
            {renderAction()}
        </div>
    )
}

export default Track;