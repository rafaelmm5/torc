namespace LibraryCommon
{
    public class PagedList<T>
    {
        public static PagedList<T> Empty()
        {
            return new PagedList<T>(Enumerable.Empty<T>(), 0, 0, 0);
        }

        public PagedList()
        {
        }

        public PagedList(IEnumerable<T> data, long total, int limit, int offset)
        {
            Data = new List<T>(data);
            TotalCount = total;
            Limit = limit;
            Offset = offset;
        }

        public PagedList(IEnumerable<T> data, long total) : this(data, total, 0, 0)
        {
        }

        public List<T> Data { get; set; }
        /// <summary>
        /// Total records
        /// </summary>
        public long TotalCount { get; private set; }
        /// <summary>
        ///  Indicates the starting position of the query in relation to the complete set of unpaginated items.
        /// </summary>
        public int Offset { get; private set; }
        /// <summary>
        ///  The limit indicates the maximum number of items to return, and is equivalent to the 'page_size' in other styles
        /// </summary>
        public int Limit { get; private set; }
    }
}
