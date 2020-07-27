import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const url = video.snippet;
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img className="ui image" src={url.thumbnails.medium.url} alt={url.title} />
      <div className="content">
        <div className="header">{url.title}</div>
      </div>
    </div>
  )}

export default VideoItem;