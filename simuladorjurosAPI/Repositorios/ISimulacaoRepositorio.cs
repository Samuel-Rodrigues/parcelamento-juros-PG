using simuladorjuros.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace simuladorjuros.Repositorios
{
  
        public interface ISimulacaoRepositorio
        {
            Simulacao Create(Simulacao simulacao);
            IEnumerable<Simulacao> GetSimulacaoPorCpf(string cpf);
        }
}

