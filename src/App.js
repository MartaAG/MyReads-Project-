import React from 'react'
//import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search.js'
import MainPage from './components/MainPage'

class BooksApp extends React.Component {
//import main page component
  render () {
    return (<MainPage/>)
  }
}


export default BooksApp
