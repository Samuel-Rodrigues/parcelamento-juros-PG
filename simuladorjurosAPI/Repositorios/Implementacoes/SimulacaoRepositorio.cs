using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using simuladorjuros.Modelos;

namespace simuladorjuros.Repositorios.Implementacoes
{
    public class SimulacaoRepositorio : ISimulacaoRepositorio
{
        private readonly string connectionString;
        public SimulacaoRepositorio(string connectionString)
        {
            this.connectionString = connectionString;
        }
        public Simulacao Create(Simulacao simulacao)
        {
            Simulacao novaSimulacao = null;
            long id = 0;
            using (var connection = new SqlConnection(connectionString))
            {

                id = connection.Query<int>("INSERT INTO Simulacao (cpf, varlor_total, juros, parcelas, data_compra) values(@Cpf, @ValorTotal, @Juros, @Parcelas, @DataCompra) SELECT CAST(SCOPE_IDENTITY() as int)",
                    new { simulacao.Cpf, simulacao.ValorTotal, simulacao.Juros, simulacao.Parcelas, simulacao.DataCompra }).Single();
            };

            return novaSimulacao;
        }

        public IEnumerable<Simulacao> GetSimulacaoPorCpf(string cpf)
        {
            IEnumerable<Simulacao> simulacoes = null;
            using (var connection = new SqlConnection(connectionString))
            {
                simulacoes = connection.Query<Simulacao>("SELECT id as Id, cpf as Cpf, varlor_total as ValorTotal, juros as Juros, parcelas as Parcelas, data_compra as DataCompra FROM Simulacao WHERE cpf =@cpf",
                    new { cpf });
            };

            return simulacoes;
        }
    }
}
