import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDfpsTIn7dkvvJljHzVx4JQq8hhSQf-fe8';

class App extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			videos: [],
			selectedVideo: null
		}

		YTsearch( { key: API_KEY, term: 'surfboards'}, ( data ) => {
			this.setState({ 
				videos: data,
				selectedVideo: data[0]
			});
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList 
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
					videos={ this.state.videos } 
				/>
			</div>
		)
	}
}

ReactDOM.render( <App />, document.querySelector('.container') );
