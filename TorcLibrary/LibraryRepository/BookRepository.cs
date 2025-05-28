
using LibraryRepository.Entities;
using Microsoft.EntityFrameworkCore;

namespace LibraryRepository
{
    public class BookRepository : Repository<Book>, IBookRepository
    {
        public BookRepository(LibraryContext context) : base(context)
        {

        }

        public async Task<(IEnumerable<Book>, int)> GetBookByQuery(string author, string isbn, string ownershipStatus, int offset, int limit)
        {
            IQueryable<Book> query = _context.Books;

            if (!string.IsNullOrWhiteSpace(author))
            {
                query = query.Where(x => (x.FirstName + " " + x.LastName).Contains(author));
            }

            if (!string.IsNullOrWhiteSpace(isbn))
            {
                query = query.Where(x => x.ISBN == isbn);
            }

            if (!string.IsNullOrEmpty(ownershipStatus))
            {
                query = query.Where(x => x.Status == ownershipStatus);
            }

            int totalRows = query.Count();

            return (await query.Skip(offset).Take(limit).ToListAsync(), totalRows);
        }
    }
}
