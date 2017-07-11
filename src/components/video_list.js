import React, {Component} from 'react'
import VideoListItem from './video_list_item'

export default class VideoList extends Component {

    render() {
        return (
            <ul className="col-md-4 list-group">
               { this.iterateOverVideos()}
            </ul>      
        );
    }

    iterateOverVideos() {
       return this.props.videos.map(video => 
       <VideoListItem
        key={video.etag} 
        video={video} 
        onVideoSelect={ this.props.onVideoSelect }
        />)
    }
}