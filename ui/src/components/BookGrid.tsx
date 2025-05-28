import React from 'react';
import type { Book } from '../types/Book';

interface BookGridProps {
  books: Book[];
  isLoading: boolean;
  error: string | null;
}

const BookGrid: React.FC<BookGridProps> = ({ books, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Error loading books</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="no-results">
        <h3>No books found</h3>
        <p>Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="book-grid">
      <div className="grid-header">
        <h3>Search Results ({books.length} books)</h3>
      </div>
      <div className="grid-container">
        <div className="grid-header-row">
          <div className="grid-cell header">Title</div>
          <div className="grid-cell header">Author</div>
          <div className="grid-cell header">ISBN</div>
          <div className="grid-cell header">Category</div>
          <div className="grid-cell header">Type</div>
          <div className="grid-cell header">Copies</div>
          <div className="grid-cell header">Status</div>
        </div>
        {books.map((book) => (
          <div key={book.id} className="grid-row">
            <div className="grid-cell" title={book.title}>
              {book.title}
            </div>
            <div className="grid-cell">
              {`${book.firstName} ${book.lastName}`.trim() || 'Unknown Author'}
            </div>
            <div className="grid-cell">{book.isbn || 'N/A'}</div>
            <div className="grid-cell">{book.category || 'N/A'}</div>
            <div className="grid-cell">{book.type || 'N/A'}</div>
            <div className="grid-cell">{book.totalCopies}</div>
            <div className="grid-cell">
              <span className={`status-badge status-${book.status?.toLowerCase()}`}>
                {book.status || 'Unknown'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGrid;