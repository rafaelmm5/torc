
using Microsoft.EntityFrameworkCore;

namespace LibraryRepository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly LibraryContext _context;
        private readonly DbSet<T> _table;

        public Repository(LibraryContext context)
        {
            _context = context;
            _table = _context.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAllAsync() => await _table.ToListAsync();

        public async Task<T?> GetByIdAsync(int id) => await _table.FindAsync(id);

        public async Task AddAsync(T entity) => await _table.AddAsync(entity);

        public void Update(T entity) => _table.Update(entity);

        public void Delete(T entity) => _table.Remove(entity);

        public async Task SaveChangesAsync() => await _context.SaveChangesAsync();
    }

}
