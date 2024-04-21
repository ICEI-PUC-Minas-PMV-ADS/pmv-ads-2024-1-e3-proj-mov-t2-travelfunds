using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using travelfunds_api.Dto;
using travelfunds_api.Service;

namespace travelfunds_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController(IUsuarioService service) : ControllerBase
    {
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Cadastro([FromBody] CadastroUsuarioDto dto)
        {
            var response = await service.Cadastro(dto);
            return Ok(response);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginUsuarioDto dto) 
        {
            var response = await service.Login(dto);
            return Ok(response);
        }
    }
}