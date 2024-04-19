using System.ComponentModel.DataAnnotations;

namespace travelfunds_api.Dto
{
    public class LoginUsuarioDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}