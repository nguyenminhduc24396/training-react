import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Pop',
            src: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/c/6/23c60ea33ac26050ec53f5a6f3b7ee18.jpg'
        },
        {
            id: 2,
            name: 'Ballad',
            src: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/0/b/740bb787c25fbd5f27e094165d22b5d3.jpg'
        },
        {
            id: 3,
            name: '2000s',
            src: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/d/a/b/bdabce2847d443fddcbe5fb516c5e268.jpg'
        }
    ];
    return (
        <div>
            <h2>Album List</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;
