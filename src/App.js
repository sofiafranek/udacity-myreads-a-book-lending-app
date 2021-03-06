import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import Homepage from './views/Homepage';
import Search from './views/Search';

import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf;
    if (this.state.books.indexOf(book) < 0) {
      this.state.books.push(book);
    }
    BooksAPI.update(book, shelf).then(
      this.setState((prevState) => {
        return {
          books: prevState.books.map((b) => (b.id === book.id ? book : b)),
        };
      })
    );
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Homepage books={this.state.books} updateBook={this.updateBook} />}
        />

        <Route
          exact
          path="/search"
          render={() => <Search books={this.state.books} updateBook={this.updateBook} />}
        />
      </div>
    );
  }
}

export default BooksApp;
