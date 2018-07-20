import React from 'react';
import ListBooks from './BooksList'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
  constructor(props) {
    super();
  }
      updateQuery = (query) => {
            this.setState({ query: query });
      }


  render() {
    // helper function for filtering books by shelf
        function filterShelf(type, book){
          return book.shelf === type;
        }
  //filtering books so they match its shelves
    return  (
    		  <div className="list-books">
      			<div className="list-books-title">
    			<h1> MyReads </h1>
          </div>
          <h2 className="bookshelf-title">Currently Reading</h2>
       		 <ListBooks
             books = {this.props.books.filter(filterShelf.bind(this, "currentlyReading"))}
             shelf = "currentlyReading"
             shelfChange = {this.props.shelfChange} />
           <h2 className="bookshelf-title">Want to read</h2>
           <ListBooks
             books = {this.props.books.filter(filterShelf.bind(this, "wantToRead"))}
             shelf = "wantToRead"
             shelfChange = {this.props.shelfChange} />
           <h2 className="bookshelf-title">Read</h2>
           	 <ListBooks
               books = {this.props.books.filter(filterShelf.bind(this, "read"))}
               shelf = "read"
               shelfChange = {this.props.shelfChange} />
             <div className = "open-search">
               <Link to = '/search'> Add a book </Link>
             </div>
           </div>

        )

    }
}

export default MainPage
