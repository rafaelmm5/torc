export interface Book {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  totalCopies: number;
  type: string;
  isbn: string;
  category: string;
  status: string;
}

export interface BookSearchParams {
  author?: string;
  isbn?: string;
  ownershipStatus?: string;
  offset?: number;
  limit?: number;
}

export interface BookSearchResult {
  books: Book[];
  totalCount: number;
  hasMore: boolean;
}

export type SearchFilterType = 'author' | 'isbn' | 'status';