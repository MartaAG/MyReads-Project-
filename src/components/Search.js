import React from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import ListBooks from './BooksList'

class Search extends React.Component {

  	state = {
      books: [],
      query: '',
      showingBooks: []
    }

updateQuery = (query) => {
    this.setState({ query: query.trim() })
    let showingBooks = [];
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showingBooks = response.map(b => {
            const index = this.state.books.findIndex(c => c.id === b.id)
            return (index >= 0) ?  this.state.books[index] : b;
      })
    }
    this.setState({showingBooks});
    })
}
}

	render() {
		return (
          <div className="search-books">
       		<Link className="close-search" to='/'> Back </Link>
            <div className="search-books-bar">
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
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
