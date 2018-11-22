import React from "react";
import VideoListItem from "./VideosListItem";

const VideosList = props => {
	const videoItems = props.videos.map(video => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video}
			/>
		);
	});

	return <ul>{videoItems}</ul>;
};

export default VideosList;
