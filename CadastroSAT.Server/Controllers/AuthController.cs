using CadastroSAT.Server.Models;
using Microsoft.AspNetCore.Mvc;
using CadastroSAT.Server.Data;

namespace CadastroSAT.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(ApplicationDbContext context) : ControllerBase
    {
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Register request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
                return BadRequest("Usuário e senha são obrigatórios.");

            if (context.Users.Any(u => u.Username == request.Username))
                return BadRequest("Usuário já existe.");

            if (request.Password != request.ConfirmPassword)
                return BadRequest("Senhas não coincidem.");

            var user = new User
            {
                Id = Guid.NewGuid(),
                Username = request.Username,
                Password = request.Password
            };

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return Ok("Usuário cadastrado com sucesso.");
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] Login request)
        {
            var user = context.Users.FirstOrDefault(u => u.Username == request.Username && u.Password == request.Password);
            if (user == null)
                return Unauthorized("Usuário ou senha inválidos.");

            return Ok("Login bem-sucedido.");
        }
    }
}