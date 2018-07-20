import React from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import ListBooks from './BooksList'

class Search extends React.Component {

  	state = {
       showingBooks: []
    }
// Input search based on a code of kedevked //https://github.com/kedevked/webinar-book-react/blob/master/src/App.js

updateQuery = (query) => {
    this.setState({ query: query.trim() })
    let showingBooks = [];
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showingBooks = response.map(b => {
            const index = this.props.books.findIndex(c => c.id === b.id)
            return (index >= 0) ?  this.props.books[index] : b;
      })
    }
    this.setState({showingBooks});
    })
}
}

	render() {
		return (
          <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'> Back </Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.props.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ListBooks
                books = {this.state.showingBooks}
                shelfChange = {this.props.shelfChange}
              />
              <ol className="books-grid"></ol>
            </div>
           </div>
           )
	}
			}

export default Search;
