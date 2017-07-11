import React, {Component} from 'react'

export default class VideoListItem extends Component {
    
    constructor(props) {
        super(props)
        this.video = props.video;
        this.onVideoSelect = props.onVideoSelect;
        this.imageUrl = this.video.snippet.thumbnails.default.url;
    } 

    render() {
        return (
            <li onClick={() => this.onVideoSelect(this.video)} className="list-group-item"> 
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={this.imageUrl} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{this.video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }
    
}