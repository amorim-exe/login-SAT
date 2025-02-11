using CadastroSAT.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace CadastroSAT.Server.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
}