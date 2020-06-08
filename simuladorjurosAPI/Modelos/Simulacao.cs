using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace simuladorjuros.Modelos
{
    public class Simulacao
    {
        public int Id { get; set; }
        public string Cpf { get; set; }
        public decimal ValorTotal { get; set; }
        public string ValorConvertidoParaReal { get; set; }
        public decimal Juros { get; set; }
        public int Parcelas { get; set; }
        public DateTime DataCompra { get; set; }

        public void  converteValorTotalParaReal()
        {
            this.ValorConvertidoParaReal = ValorTotal.ToString("C2");
        }

    }
}
