using Microsoft.AspNetCore.Mvc;
using simuladorjuros.Modelos;
using simuladorjuros.Servicos;
using System.Collections.Generic;

namespace simuladorjuros.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimulacaoController : ControllerBase
    {
        private ISimulacaoServico _simulacaoServico;

        public SimulacaoController(ISimulacaoServico simulacaoServico)
        {
            _simulacaoServico = simulacaoServico;
        }

        [HttpGet("{cpf}")]
        public IActionResult GetPorCpf(string cpf)
        {
            var result = _simulacaoServico.GetSimulacaoPorCpf(cpf);

            return Ok(result);
        }

        [HttpGet("parcelas/{cpf}")]
        public IActionResult GetParcelas(string cpf)
        {
            IList<SimulacaoParcelas> result = _simulacaoServico.GetTodasParcelas(cpf);

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create([FromBody]Simulacao simulacao)
        {
            Simulacao novaSimulacao = _simulacaoServico.Create(simulacao);

            return Ok(novaSimulacao);
        }
    }
}