import React, {Component} from 'react'
import ReactDOM    from 'react-dom'
import YTSearch    from 'youtube-api-search'
import SearchBar   from './components/search_bar'
import VideoList   from './components/video_list'
import VideoDetail from './components/video_details'
import _ from 'lodash'

const API_KEY = 'AIzaSyAABjIX5gq6C6dGQcx03X84RPqPhCcnxQg';
// Create new component. Should produce HTML


//This is JSX Braaaah
export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [], selectedVideo: null };
    }

    render() {
        const videoSearch = _.debounce(term => {this.setVideos(term) }, 500);
        return (
            
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos}
                 onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        )
    }
    componentWillMount() {
        this.setVideos('nodejs')
    }

    setVideos(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ videos: videos, selectedVideo: videos[0] })
        });
    }
    
}

// USING REACT DOM, CUZ this is what renders to DOM
ReactDOM.render(<App />, document.querySelector('.container'))

// Take this HTML and put it on the page.