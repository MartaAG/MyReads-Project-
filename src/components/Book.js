import React from 'react';


function Book(props) {
  return (
    <li>
      <div className="book">
      <div className = "book-cover"
          style = {{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
            backgroundSize: '100% 100%'
          }}>
              <div className="book-shelf-changer">
                      <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">CurrentlyReading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                        </div>
              </div>
              <div className="book-title">{props.book.title}</div>
              <div className="book-authors">
                  {props.book.authors.map((author) => {
                  return author + ', ';})}
              </div>
        </div>
     </li>
      )
}

export default Book
