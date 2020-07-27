import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('buildings');

  // every time a new set of videos is rendered, select the first vido
  useEffect(() => {
    setSelectedVideo(videos[0]);

  }, [videos])

  //setSelectedVideo(response.data.items[0]);

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={(video) => {
                setSelectedVideo(video)
              }}
                videos={videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }


export default App;