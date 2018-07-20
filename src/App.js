import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search.js'
import MainPage from './components/MainPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  //getting books from BookApi
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
//import main page component
  render () {
    return (
      <div className="app">
        <Route exact path='/' render={(props) => <MainPage {...props} books={this.state.books} shelfChange={this.shelfChange.bind(this)}/>} />
        <Route path='/search' render={(props) => <Search {...props} books={this.state.books} shelfChange={this.shelfChange.bind(this)}/>}/>
    </div>
    )
  }
}


export default BooksApp
