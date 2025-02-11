using System.ComponentModel.DataAnnotations;

namespace CadastroSAT.Server.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
    }
}
