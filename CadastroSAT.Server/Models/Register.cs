using System.ComponentModel.DataAnnotations;

namespace CadastroSAT.Server.Models
{
    public class Register
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string ConfirmPassword { get; set; }
    }
}
