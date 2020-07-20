import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  const { books, updateBook } = props;
  return (
    <section className="bookshelf-container">
      <ol className="books-grid">
        {books.map((book) => (
          <Book key={book.id} book={book} updateBook={updateBook} />
        ))}
      </ol>
    </section>
  );
};

export default BookShelf;
