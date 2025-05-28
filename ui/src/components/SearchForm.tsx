import React, { useState } from 'react';
import type { SearchFilterType } from '../types/Book';

interface SearchFormProps {
  onSearch: (filterType: SearchFilterType, searchValue: string) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [filterType, setFilterType] = useState<SearchFilterType>('author');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filterType, searchValue.trim());
  };

  const handleClear = () => {
    setSearchValue('');
    onSearch(filterType, '');
  };

  return (
    <div className="search-form">
      <h2>Library Book Search</h2>
      <form onSubmit={handleSubmit} className="search-form-container">
        <div className="form-group">
          <label htmlFor="filter-type">Search by:</label>
          <select
            id="filter-type"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as SearchFilterType)}
            className="filter-dropdown"
          >
            <option value="author">Author</option>
            <option value="isbn">ISBN</option>
            <option value="status">Status</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="search-value">
            {filterType === 'author' && 'Author Name:'}
            {filterType === 'isbn' && 'ISBN:'}
            {filterType === 'status' && 'Status:'}
          </label>
          <input
            type="text"
            id="search-value"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={`Enter ${filterType}...`}
            className="search-input"
          />
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            disabled={isLoading}
            className="search-button"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
          <button 
            type="button" 
            onClick={handleClear}
            className="clear-button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;