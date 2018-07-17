import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search.js'
import ListBooks from './components/BooksList'

class BooksApp extends React.Component {
  state = {
    searchResults: [],
    books: []
  }

  updateQuery = (query) => {

        this.setState({ query: query });
        console.log(query);
    }

    componentDidMount () {
      BooksAPI.getAll().then((books) => {
		this.setState({ books })
      })
}


  render () {

   return (
      <div className="app">
		  <div className="list-books">
  			<div className="list-books-title">
			<h1> MyReads </h1>
      </div>
   		 <ListBooks books = {this.state.books} />
       </div>
      </div>

      

    )
  }
}


export default BooksApp
