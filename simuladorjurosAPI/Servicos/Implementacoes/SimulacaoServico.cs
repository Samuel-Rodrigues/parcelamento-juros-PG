using simuladorjuros.Modelos;
using simuladorjuros.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace simuladorjuros.Servicos.Implementacoes
{
    public class SimulacaoServico : ISimulacaoServico
    {
        private ISimulacaoRepositorio _simulacaoRepositorio;

        public SimulacaoServico(ISimulacaoRepositorio simulacaoRepositorio)
        {
            _simulacaoRepositorio = simulacaoRepositorio;
        }

        public Simulacao Create(Simulacao simulacao) =>
            _simulacaoRepositorio.Create(simulacao);

        public IEnumerable<Simulacao> GetSimulacaoPorCpf(string cpf) =>
            _simulacaoRepositorio.GetSimulacaoPorCpf(cpf);

        public IList<SimulacaoParcelas> GetTodasParcelas(string cpf)
        {
            List<Parcela> parcelas = new List<Parcela>();
            SimulacaoParcelas simulacaoParcelas = new SimulacaoParcelas();

            var simulacoes = _simulacaoRepositorio.GetSimulacaoPorCpf(cpf).ToList();

            return simulacoes.Select(simulacao => new SimulacaoParcelas
            {
                Simulacao = simulacao,
                Parcelas = ObterParcelas(simulacao)
            }).ToList();
        }

        private IEnumerable<Parcela> ObterParcelas(Simulacao simulacao) =>
            Enumerable.Range(0, simulacao.Parcelas)
                .Select(x => ObterParcela(simulacao, x)).ToList();

        private Parcela ObterParcela(Simulacao simulacao, int quantidadeParcelas)
        {
            simulacao.converteValorTotalParaReal();
            quantidadeParcelas = (quantidadeParcelas + 1);
            int simulacaoId = simulacao.Id;
            DateTime dataVencimento = simulacao.DataCompra.AddMonths(quantidadeParcelas);
            decimal _valorJuros = (simulacao.ValorTotal * simulacao.Juros) / 100;
            string valorJuros = _valorJuros.ToString("C2");
            string valorParcela = ((simulacao.ValorTotal / simulacao.Parcelas) + (simulacao.ValorTotal * simulacao.Juros) / 100).ToString("C2");
            Parcela parcela = new Parcela();
            parcela.Create(simulacaoId, quantidadeParcelas, dataVencimento, valorParcela, valorJuros);

            return parcela;
        }
    }
}
