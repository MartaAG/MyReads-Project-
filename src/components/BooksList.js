import React from 'react';
import Book from './Book';

class ListBooks extends React.Component {
  constructor(props) {
    super(props);
    }


  render() {
    return (
      <div className="bookshelf" >
          <div className="bookshelf-books">
              <ol className="books-grid">
        {this.props.books.map((book) => {
        return (
            <Book book={book} key={book.id} shelfChange={this.props.shelfChange}/>
              );
        })}</ol>
        </div>
      </div>
    )
    }

}

export default ListBooks;
