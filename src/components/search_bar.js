import React, {Component} from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {term:''}
    }

    render() {
        return (
            <div className="search-bar">
                <input placeholder="Search" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        if(!term) term = 'nodejs';
        this.setState({term})
        this.props.onSearchTermChange(term);
    }
}

