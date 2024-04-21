using System.ComponentModel.DataAnnotations;

namespace travelfunds_api.Dto
{
    public class CadastroUsuarioDto
    {
        [Required]
        public string Username { get; set; }
        [Required]	
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Senha { get; set; }
        [DataType(DataType.Password)]
        [Compare(nameof(Senha), ErrorMessage = "Senha e confirmação de senha devem ser iguais!")]
        public string ConfirmaSenha { get; set; }
    }
}