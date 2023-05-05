import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album(props) {
    const { album } = props;

    return (
        <div className="album">
            <div className="album_src">
                <img src={album.src} alt=""/>
            </div>
            <p className="album_name">{album.name}</p>
        </div>
    );
}

export default Album;
