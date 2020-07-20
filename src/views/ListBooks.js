import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';

class listBooks extends Component {
  render() {
    const { books, updateBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          <Link to="/search">Search</Link>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <BookShelf
                books={books.filter((book) => book.shelf === 'currentlyReading')}
                updateBook={updateBook}
              />
              <h2 className="bookshelf-title">Want to Read</h2>
              <BookShelf
                books={books.filter((book) => book.shelf === 'wantToRead')}
                updateBook={updateBook}
              />
              <h2 className="bookshelf-title">Read</h2>
              <BookShelf
                books={books.filter((book) => book.shelf === 'read')}
                updateBook={updateBook}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default listBooks;
