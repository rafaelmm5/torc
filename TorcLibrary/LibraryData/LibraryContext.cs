using LibraryRepository.Entities;
using Microsoft.EntityFrameworkCore;

namespace LibraryRepository
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options): base(options)
        {
            
        }

        public DbSet<Book> Books { get; set; }
    }
}
