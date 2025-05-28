using LibrarySearchService;
using Microsoft.AspNetCore.Mvc;

namespace LibraryAPI.Controllers
{

    [Route("orders")]
    [ApiController]
    public class BookController : Controller
    {
        private readonly IBookSearchService _bookSearchService;

        public BookController(IBookSearchService bookSearchService)
        {
            _bookSearchService = bookSearchService;
        }


        [HttpGet]
        public async Task<IActionResult> GetBooks(string? author, string? isbn, string? ownershipStatus, int offset = 0, int limit = 5)
        {
            return Ok(await _bookSearchService.GetBookByQuery(author, isbn, ownershipStatus, offset, limit));
        }
    }
}
