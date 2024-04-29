using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using travelfunds_api.Dto;
using travelfunds_api.Model;

namespace travelfunds_api.Service.Implementacao
{
    public class UsuarioService(UserManager<Usuario> userManager, IConfiguration configuration) 
        : IUsuarioService
    {

        public async Task<string> Cadastro(CadastroUsuarioDto cadastroUsuarioDto)
        {
            var userByEmail = await userManager.FindByEmailAsync(cadastroUsuarioDto.Email);
            if (userByEmail != null) 
            {
                throw new ArgumentException($"Usuario com o email: {cadastroUsuarioDto.Email} ja cadastrado");
            }

            Usuario usuario = new Usuario
            {
                Email = cadastroUsuarioDto.Email,
                UserName = cadastroUsuarioDto.Username,
                SecurityStamp = Guid.NewGuid().ToString()
            };

            var result = await userManager.CreateAsync(usuario, cadastroUsuarioDto.Senha);
            if (!result.Succeeded)
            {
                throw new ArgumentException("Não foi possivel registrar o usuário");
            }

            return await Login(new LoginUsuarioDto{ Email = usuario.Email, Password = cadastroUsuarioDto.Senha });
        }

        public async Task<string> Login(LoginUsuarioDto loginUsuarioDto)
        {
            var user = await userManager.FindByEmailAsync(loginUsuarioDto.Email);

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = GetToken(authClaims);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authLoginKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]));

            return new JwtSecurityToken (
                issuer: configuration["JWT:ValidIssuer"],
                audience: configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaims,
                signingCredentials: new SigningCredentials(authLoginKey, SecurityAlgorithms.HmacSha256)
            );
        }
    }
}