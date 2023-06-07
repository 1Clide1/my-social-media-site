// imports
import React from 'react';
// styles
import '../styles/partials/_youtube-section.scss';

function LatestUploads() {
  // const youtubeAPI = `https:youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2gfQKSINWPvnr0nAZWeYVw&maxResults=5&order=date&key=AIzaSyDWcpKy5LiGONiTnGz_q4iqMIZZY5vaPaE`;

  return (
    <div className='upload-container'>
      <h3 className='upload-title'>Latest Uploads</h3>
      <div className='latest-video-card'>
        <p> video title</p>
      </div>
    </div>
  );
}

export default LatestUploads;
