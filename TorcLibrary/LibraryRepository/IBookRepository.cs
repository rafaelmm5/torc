
using LibraryRepository.Entities;

namespace LibraryRepository
{
    public interface IBookRepository : IRepository<Book>
    {
        Task<(IEnumerable<Book>, int)> GetBookByQuery(string author, string isbn, string ownershipStatus, int offset, int limit);
    }

}
