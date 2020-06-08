using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace simuladorjuros.Modelos
{
    public class SimulacaoParcelas
    {
        public Simulacao Simulacao { get; set; }
        public IEnumerable<Parcela> Parcelas { get; set; }
   
    }
}
