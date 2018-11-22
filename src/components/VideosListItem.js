import React from "react";

const VideosListItem = ({ video, onVideoSelect }) => (
	<li onClick={() => onVideoSelect(video)} className="list-group-item">
		<div className="video-list media">
			<div className="media-left">
				<img
					className="media-object"
					src={video.snippet.thumbnails.default.url}
					alt={video.snippet.title}
				/>
			</div>
			<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
			</div>
		</div>
	</li>
);

export default VideosListItem;
