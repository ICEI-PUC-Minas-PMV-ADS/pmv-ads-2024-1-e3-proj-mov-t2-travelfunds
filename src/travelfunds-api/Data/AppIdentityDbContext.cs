using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace travelfunds_api.Data
{
    public class AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : IdentityDbContext(options)
    {

    }
}