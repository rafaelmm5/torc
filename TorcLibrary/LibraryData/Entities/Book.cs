using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LibraryRepository.Entities
{
    public class Book
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Book_Id")]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Column("First_Name")]
        public string FirstName { get; set; }

        [Column("Last_Name")]
        public string LastName { get; set; }

        [Column("Total_Copies")]
        public int TotalCopies { get; set; }

        public string Type { get; set; }
        public string ISBN { get; set; }
        public string Category { get; set; }
        public string Status { get; set; }
    }
}
