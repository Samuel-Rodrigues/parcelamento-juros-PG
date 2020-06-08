using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace simuladorjuros.Modelos
{
    public class Parcela
    {
        public int SimulacaoId { get; set; }
        public int NumeroParcela { get; set; }
        public DateTime DataVencimento { get; set; }
        public string ValorParcela { get; set; }
        public string ValorJuros { get; set; }

        public void Create(int simulacaoId, int numeroParcela,DateTime dataVencimento, string valorParcela, string valorJuros)
        {
            this.SimulacaoId = simulacaoId;
            this.NumeroParcela = numeroParcela;
            this.DataVencimento = dataVencimento;
            this.ValorParcela = valorParcela;
            this.ValorJuros = valorJuros;
        }
    }
}
