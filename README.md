# Torc Library Management System

A .NET 9.0 library management system built with clean architecture principles, providing REST API endpoints for managing and searching books in a library catalog.

## Features

- RESTful API for book management
- Advanced book search with filtering by author, ISBN, and ownership status
- Paginated results for efficient data retrieval
- Clean architecture with separation of concerns
- Entity Framework Core for data persistence
- Swagger/OpenAPI documentation
- Dependency injection throughout

## Architecture

The solution follows a layered architecture pattern:

```
LibraryAPI (Web API Layer)
    ↓
LibrarySearchService (Business Logic Layer)
    ↓
LibraryRepository (Data Access Layer)
    ↓
LibraryData (Entity Models & DbContext)
    ↓
LibraryCommon (Shared Models & Configuration)
```

## Book Entity

Books contain the following properties:
- **Title** - Book title (required)
- **FirstName/LastName** - Author information
- **TotalCopies** - Number of copies available
- **Type** - Book type/format
- **ISBN** - International Standard Book Number
- **Category** - Book category/genre
- **Status** - Current ownership/availability status

## API Endpoints

### Get Books
```
GET /orders?author={author}&isbn={isbn}&ownershipStatus={status}&offset={offset}&limit={limit}
```

**Query Parameters:**
- `author` (optional) - Filter by author name
- `isbn` (optional) - Filter by ISBN
- `ownershipStatus` (optional) - Filter by ownership status
- `offset` (optional, default: 0) - Pagination offset
- `limit` (optional, default: 5) - Number of results per page

## Getting Started

### Prerequisites
- .NET 9.0 SDK
- SQL Server (or compatible database)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd torc
```

2. Configure database connection in `appsettings.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "your-connection-string-here"
  }
}
```

3. Build the solution:
```bash
dotnet build TorcLibrary/TorcLibrary.sln
```

4. Run the API:
```bash
cd TorcLibrary/LibraryAPI
dotnet run
```

5. Access Swagger documentation at `http://localhost:5242` (or configured port)

### Development Commands

```bash
# Restore packages
dotnet restore TorcLibrary/TorcLibrary.sln

# Build solution
dotnet build TorcLibrary/TorcLibrary.sln

# Run tests
dotnet test TorcLibrary/TorcLibrary.sln

# Clean build artifacts
dotnet clean TorcLibrary/TorcLibrary.sln
```

## Project Structure

- **LibraryAPI** - ASP.NET Core Web API with controllers and startup configuration
- **LibrarySearchService** - Business logic for book search and filtering operations
- **LibraryRepository** - Data access layer with repository pattern implementation
- **LibraryData** - Entity Framework models and database context
- **LibraryCommon** - Shared utilities, models, and configuration classes

## Technology Stack

- **.NET 9.0** - Runtime framework
- **ASP.NET Core** - Web API framework
- **Entity Framework Core** - ORM for database operations
- **Swagger/Swashbuckle** - API documentation
- **Dependency Injection** - Built-in .NET DI container
