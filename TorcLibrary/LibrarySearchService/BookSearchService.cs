using LibraryCommon;
using LibraryRepository;
using LibraryRepository.Entities;
using LibrarySearchService.Models;

namespace LibrarySearchService
{
    public class BookSearchService : IBookSearchService
    {
        private readonly IBookRepository _bookRepository;

        public BookSearchService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task<PagedList<BookModel>> GetBookByQuery(string author, string isbn, string ownerShipStatus, int offset, int limit)
        {
            (IEnumerable<Book> books, int totalCount) = await _bookRepository.GetBookByQuery(author, isbn, ownerShipStatus, offset, limit);
            var result = books.Select(Map);

            return new PagedList<BookModel>(books.Select(Map), totalCount, limit, offset);
        }

        private BookModel Map(Book book)
        {
            return new BookModel
            {
                Category = book.Category,
                FirstName = book.FirstName,
                Id = book.Id,
                ISBN = book.ISBN,
                LastName = book.LastName,
                Title = book.Title,
                Status = book.Status,
                TotalCopies = book.TotalCopies,
                Type = book.Type
            };
        }
    }
}
