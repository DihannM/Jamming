import React from 'react';
import "./Track.css";

function Track() {

    const renderAction = () => {
        if (this.props.isRemoval) {
            return (
                <button className="Track-action">
                    -
                </button>
            );
        } else {
            return (
                <button className="Track-action">
                    +
                </button>
            );
        };
    };

    return (
        <div className="Track">
            <div className="Track-information"></div>
            {renderAction()}
        </div>
    )
}

export default Track;