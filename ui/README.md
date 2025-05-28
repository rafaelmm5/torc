# Library Management UI

A React TypeScript frontend application for the Torc Library Management System. This UI provides a clean interface for searching and browsing books using the Library API.

## Features

- **Advanced Search**: Filter books by author, ISBN, or status
- **Grid Display**: Clean tabular view of book results
- **Pagination**: Navigate through large result sets efficiently
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Search**: Instant results as you search
- **Loading States**: User-friendly loading and error handling

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **CSS Grid** - Modern responsive layouts
- **Fetch API** - HTTP client for API communication

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- The Library API running on `http://localhost:5242`

### Installation

1. Navigate to the UI directory:
```bash
cd ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### API Configuration

The application is configured to connect to the Library API at `http://localhost:5242`. To change this:

1. Edit `src/services/bookService.ts`
2. Update the `API_BASE_URL` constant

## Usage

### Search Interface
1. **Select Filter Type**: Choose from Author, ISBN, or Status in the dropdown
2. **Enter Search Term**: Type your search criteria in the text box
3. **Click Search**: Results will appear in the grid below
4. **Clear Results**: Use the Clear button to reset the search

### Grid Features
- **Responsive Columns**: Title, Author, ISBN, Category, Type, Copies, Status
- **Status Badges**: Color-coded status indicators
- **Hover Effects**: Row highlighting for better usability

### Pagination
- **Page Navigation**: Previous/Next buttons and numbered pages
- **Page Info**: Current page and total page count
- **Configurable**: 10 items per page (adjustable in App.tsx)

## Project Structure

```
src/
├── components/
│   ├── BookGrid.tsx      # Results display grid
│   ├── Pagination.tsx    # Pagination controls
│   └── SearchForm.tsx    # Search interface
├── services/
│   └── bookService.ts    # API communication
├── types/
│   └── Book.ts          # TypeScript interfaces
├── App.tsx              # Main application component
├── App.css              # Application styles
└── main.tsx             # Application entry point
```

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## API Integration

The UI integrates with the following API endpoint:

```
GET /orders?author={author}&isbn={isbn}&ownershipStatus={status}&offset={offset}&limit={limit}
```

**Expected Response Format:**
```json
{
  "items": [
    {
      "id": 1,
      "title": "Book Title",
      "firstName": "Author",
      "lastName": "Name",
      "totalCopies": 5,
      "type": "Hardcover",
      "isbn": "123456789",
      "category": "Fiction",
      "status": "Available"
    }
  ],
  "totalCount": 100,
  "hasMore": true
}
```

## Styling

The application uses CSS Grid and Flexbox for layouts with:
- **Color Scheme**: Purple gradient header with clean white sections
- **Typography**: System fonts for optimal performance
- **Responsive Breakpoints**: Mobile-first design with 768px breakpoint
- **Hover States**: Interactive feedback throughout the interface

## Development Notes

- The application assumes the API returns paginated results
- Error handling includes network failures and API errors
- Loading states provide visual feedback during API calls
- The grid is optimized for displaying book metadata clearly
