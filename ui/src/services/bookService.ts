import { type BookSearchParams, type BookSearchResult } from '../types/Book';

const API_BASE_URL = 'http://localhost:5242';

export class BookService {
  static async searchBooks(params: BookSearchParams): Promise<BookSearchResult> {
    const searchParams = new URLSearchParams();
    
    if (params.author) searchParams.append('author', params.author);
    if (params.isbn) searchParams.append('isbn', params.isbn);
    if (params.ownershipStatus) searchParams.append('ownershipStatus', params.ownershipStatus);
    if (params.offset !== undefined) searchParams.append('offset', params.offset.toString());
    if (params.limit !== undefined) searchParams.append('limit', params.limit.toString());

    const url = `${API_BASE_URL}/books?${searchParams.toString()}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Assuming the API returns a paginated response with books array
      return {
        books: data.data || [],
        totalCount: data.totalCount || 0,
        hasMore: (data.limit + data.offset) < data.totalCount || false
      };
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  }
}