using travelfunds_api.Dto;

namespace travelfunds_api.Service
{
    public interface IUsuarioService
    {
        Task<string> Cadastro(CadastroUsuarioDto cadastroUsuarioDto);
        Task<string> Login(LoginUsuarioDto loginUsuarioDto);
    }
}