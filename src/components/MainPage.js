import React from 'react';
import ListBooks from './BooksList'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class MainPage extends React.Component {
      state = {
      searchResults: [],
      books: []
    }

      updateQuery = (query) => {
            this.setState({ query: query });
            console.log(query);
        }

        //get books from BookApi
      componentDidMount () {
          BooksAPI.getAll().then((books) => {
    		      this.setState({ books })
          })
          // Log added books
          BooksAPI.getAll().then((books) => console.log(books))
        }

        //A method on updating shelf
    shelfChange(book, shelf) {
        BooksAPI.update(book, shelf);
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
      })
    }
  render() {
    // helper function for filtering books by shelf
        function filterShelf(type, book){
          return book.shelf === type;
        }

    return  (
      <div className="app">
    		  <div className="list-books">
      			<div className="list-books-title">
    			<h1> MyReads </h1>
          </div>
          <h2 className="bookshelf-title">Currently Reading</h2>
       		 <ListBooks
             books = {this.state.books.filter(filterShelf.bind(this, "currentlyReading"))}
             shelf = "currentlyReading"
             shelfChange = {this.shelfChange.bind(this)}  />
           <h2 className="bookshelf-title">Want to read</h2>
           <ListBooks
             books = {this.state.books.filter(filterShelf.bind(this, "wantToRead"))}
             shelf = "wantToRead"
             shelfChange = {this.shelfChange.bind(this)} />
           <h2 className="bookshelf-title">Read</h2>
           	 <ListBooks
               books = {this.state.books.filter(filterShelf.bind(this, "read"))}
               shelf = "read"
               shelfChange = {this.shelfChange.bind(this)} />
           </div>

            <div className = "open-search">
             <Link to = '/search'> Add a book </Link>
             </div>
        </div>)

    }
}

export default MainPage
