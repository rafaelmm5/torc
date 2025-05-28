

using LibraryCommon;
using LibrarySearchService.Models;

namespace LibrarySearchService
{
    public interface IBookSearchService
    {
        Task<PagedList<BookModel>> GetBookByQuery(string author, string isbn, string ownerShipStatus, int offset, int limit);
    }
}
