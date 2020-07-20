import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';

const Homepage = (props) => {
  const { books, updateBook } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
        <Link to="/search">Search</Link>
      </div>
      <section className="list-books-content">
        <div className="bookshelf">
          <h2>Currently Reading</h2>
          <BookShelf
            books={books.filter((book) => book.shelf === 'currentlyReading')}
            updateBook={updateBook}
          />
          <h2>Want to Read</h2>
          <BookShelf
            books={books.filter((book) => book.shelf === 'wantToRead')}
            updateBook={updateBook}
          />
          <h2>Read</h2>
          <BookShelf
            books={books.filter((book) => book.shelf === 'read')}
            updateBook={updateBook}
          />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
