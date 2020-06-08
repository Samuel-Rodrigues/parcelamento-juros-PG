export function requisicaoBuscarSimulacoesPorCpf(cpf) {
    return {
        type: '@REQUISICAO_BUSCAR_SIMULACOES_POR_CPF',
        payload: { cpf },
    }
}

export function sucessoBuscarSimulacoesPorCpf(simulacoes) {
    return {
        type: '@SUCESSO_BUSCAR_SIMULACOES_POR_CPF',
        payload: simulacoes
    }
}

export function gerarSimulacao(simulacao) {
    return {
        type: '@GERAR_SIMULACAO',
        payload: simulacao
    }
}