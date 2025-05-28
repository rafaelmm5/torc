import React, { useState, useCallback } from 'react';
import SearchForm from './components/SearchForm';
import BookGrid from './components/BookGrid';
import Pagination from './components/Pagination';
import { BookService } from './services/bookService';
import type { Book, SearchFilterType, BookSearchParams } from './types/Book';
import './App.css';

const ITEMS_PER_PAGE = 10;

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [currentSearch, setCurrentSearch] = useState<{
    filterType: SearchFilterType;
    searchValue: string;
  } | null>(null);

  const searchBooks = useCallback(async (
    filterType: SearchFilterType,
    searchValue: string,
    page: number = 1
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const params: BookSearchParams = {
        offset: (page - 1) * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
      };

      // Map filter type to API parameter
      if (searchValue) {
        switch (filterType) {
          case 'author':
            params.author = searchValue;
            break;
          case 'isbn':
            params.isbn = searchValue;
            break;
          case 'status':
            params.ownershipStatus = searchValue;
            break;
        }
      }

      const result = await BookService.searchBooks(params);
      
      setBooks(result.books);
      setHasMore(result.hasMore);
      
      // Calculate total pages if we have total count
      if (result.totalCount > 0) {
        setTotalPages(Math.ceil(result.totalCount / ITEMS_PER_PAGE));
      } else {
        setTotalPages(0);
      }

      setCurrentPage(page);
      setCurrentSearch({ filterType, searchValue });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while searching for books');
      setBooks([]);
      setTotalPages(0);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSearch = (filterType: SearchFilterType, searchValue: string) => {
    setCurrentPage(1);
    searchBooks(filterType, searchValue, 1);
  };

  const handlePageChange = (page: number) => {
    if (currentSearch) {
      searchBooks(currentSearch.filterType, currentSearch.searchValue, page);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Library Management System</h1>
      </header>
      
      <main className="App-main">
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        
        <div className="results-section">
          <BookGrid 
            books={books} 
            isLoading={isLoading} 
            error={error} 
          />
          
          {(books.length > 0 || hasMore) && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              hasMore={hasMore}
              isLoading={isLoading}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
