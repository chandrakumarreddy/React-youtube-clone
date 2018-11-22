import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=1&autoplay=1`;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={url}
          title={video.snippet.title}
          frameborder="0"
          allow="autoplay"
        />
      </div>
      <div className="details">
        <div className="details-heading">{video.snippet.title}</div>
        <div className="details-subheading">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
