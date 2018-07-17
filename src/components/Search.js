import React from 'react';
import {Link} from 'react-router-dom'

class Search extends React.Component {

  	state = {}

	render() {
		return (
          <div className="search-books">
       <Link className="close-search" to='/'> Back </Link>
            <div className="search-books-bar">
              <a className="close-search">Close</a>
              <div className="search-books-input-wrapper">
                {}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
           )
	}
			}

export default Search;
