import React from 'react';

const Book = (props) => {
  const onBookShelfChange = (e) => {
    e.preventDefault();
    if (props.updateBook) {
      props.updateBook(props.book, e.target.value);
    }
  };

  const { book } = props;
  if (!book.shelf) {
    book.shelf = 'none';
  }

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          {book.imageLinks && ( //Not all books have authors
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: 'url(' + book.imageLinks.thumbnail + ')',
              }}
            ></div>
          )}
          <div className="book-shelf-changer">
            {book.shelf && (
              <select onChange={onBookShelfChange} defaultValue={book.shelf}>
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            )}
          </div>
        </div>
        {book.title && (
          <div className="book-title">
            {
              book.title //Not all books have authors
            }
          </div>
        )}
        {book.authors && //Not all books have authors
          book.authors.map((author) => (
            <div className="book-authors" key={author}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;
