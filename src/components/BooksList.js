import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function ListBooks(props) {

    return (
      <div className="bookshelf" >
          <div className="bookshelf-books">
              <ol className="books-grid">
        {props.books.map((book) => {
        return (
            <Book book = {book} key = {book.id}/>
              );
        })}</ol>
        </div>
      </div>
    )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired
}
export default ListBooks;
