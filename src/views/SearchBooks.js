import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../components/Book';
import * as BooksAPI from '../utils/BooksAPI';
import { debounce } from 'lodash';

class SearchBooks extends Component {
  state = {
    searchQuery: '',
    showingBooks: [],
  };

  componentWillMount() {
    this.update = debounce(this.update, 100);
  }

  update = (query) => {
    if (query) {
      this.setState({ searchQuery: 'searching' });
      BooksAPI.search(query, 20).then((data) => {
        if (data) {
          if (!data.error) {
            data = data.map((book) => {
              const bookInShelf = this.props.books.find((b) => b.id === book.id);
              if (bookInShelf) {
                book.shelf = bookInShelf.shelf;
              }
              return book;
            });
            this.setState({ searchQuery: 'results', showingBooks: data });
          } else {
            this.setState({ searchQuery: 'error', showingBooks: data.error });
          }
        }
      });
    } else {
      this.setState({ searchQuery: 'noresults', showingBooks: [] });
    }
  };

  render() {
    const { updateBook } = this.props;
    const { searchQuery, showingBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={(event) => this.update(event.target.value)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchQuery === 'searching' && (
              <div className="search-book-results-msg">Searching...</div>
            )}
            {searchQuery === 'noresults' && <div className="search-book-results-msg"></div>}
            {searchQuery === 'error' && showingBooks === 'empty query' && (
              <div className="search-book-results-msg">
                Sorry! No results match your search. Try again...
              </div>
            )}
            {searchQuery === 'results' &&
              showingBooks.map((book) => (
                <Book key={book.id} book={book} updateBook={updateBook} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
