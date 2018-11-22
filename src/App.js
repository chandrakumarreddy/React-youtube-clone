import React from "react";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import VideosList from "components/VideosList";
import VideoDetail from "components/VideoDetail";
import SearchBox from "components/SearchBox";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null,
			term: "colorful chilaka"
		};
		this.updateSearch(this.state.term);
	}

	onVideoSelect = selectedVideo => this.setState({ selectedVideo });

	updateSearch = term => {
		YTSearch(
			{
				key: "AIzaSyCLCpsXKV2bQZhVAYjNsmz4FQXbQ3XFUlE",
				term: term
			},
			data => {
				this.setState({
					selectedVideo: data[0],
					videos: data.filter(item => item.etag !== this.state.etag)
				});
			}
		);
	};
	videoSearch = _.debounce(term => this.updateSearch(term), 300);
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-12  search-bar">
						<SearchBox onSearchChange={this.videoSearch} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 AppVideoDetail">
						<VideoDetail video={this.state.selectedVideo} />
					</div>
					<div className="col-md-4 AppVideosList">
						<VideosList
							videos={this.state.videos}
							onVideoSelect={this.onVideoSelect}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
