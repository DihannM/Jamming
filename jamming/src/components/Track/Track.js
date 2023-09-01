import React, {useCallback} from 'react';
import "./Track.css";

const Track = (props) => {

    const addTrack = useCallback(
        (event) => {
          props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    const renderAction = () => {
        if (this.props.isRemoval) {
            return (
                <button className="Track-action">
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

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;