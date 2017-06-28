import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyAABjIX5gq6C6dGQcx03X84RPqPhCcnxQg';
// Create new component. Should produce HTML

//This is JSX Braaaah
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

// USING REACT DOM, CUZ this is what renders to DOM
ReactDOM.render(<App />, document.querySelector('.container'))

// Take this HTML and put it on the page.