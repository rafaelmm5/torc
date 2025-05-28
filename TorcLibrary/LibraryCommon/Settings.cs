namespace LibraryCommon
{
    public class Settings
    {
        public DBSettings ConnectionStrings {  get; set; }

    }

    public class DBSettings 
    {
        public string DefaultConnection {  get; set; }
    }
}
