using simuladorjuros.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace simuladorjuros.Servicos
{
    public interface ISimulacaoServico
    {
        Simulacao Create(Simulacao simulacao);
        IEnumerable<Simulacao> GetSimulacaoPorCpf(string cpf);
        IList<SimulacaoParcelas> GetTodasParcelas(string cpf);
    }
}
