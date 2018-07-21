import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props); //calls parents constructor
    this.handleChange = this.handleChange.bind(this);

  }
  //Change select options
  handleChange (event) {
    this.props.shelfChange(this.props.book, event.target.value);
  }
  //take value from select list
render() {
  const emptyThumbnail = "/src/img/no-cover.png";
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
               width: 128,
               height: 192,
               backgroundImage: `url(
                ${
                  this.props.book.imageLinks
                ? this.props.book.imageLinks.thumbnail
                : emptyThumbnail
                }
               )`
               }}></div>
            <div className="book-shelf-changer">
              <select value = { (this.props.book.shelf !== undefined) ?
                this.props.book.shelf : "none"}
                   onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        </div>
          <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">
                 { this.props.book.authors
                 ? this.props.book.authors.map(
                   (author) => {return author + ', ';})
                 : "unavailable"}
            </div>
      </div>
    </li>
  )}
}

export default Book
