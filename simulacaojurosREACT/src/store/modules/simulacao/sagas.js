import { toast } from 'react-toastify'
import { all, takeLatest, call, put } from 'redux-saga/effects'

import api from '../../../services/api'
import history from '../../../services/history';
import { sucessoBuscarSimulacoesPorCpf } from './actions'

export function* requisicaoBuscarSimulacoesPorCpf({ payload }) {
    try {

        const response = yield call(api.get, `/simulacao/parcelas/${payload.cpf}`);
        yield put(sucessoBuscarSimulacoesPorCpf(response.data))

        if (response.data.length === 0) {
            toast.error('CPF não localizado');
            return
        }
        toast.success('Simulações carregadas');
    } catch (err) {
        toast.error('Erro no servidor');
    }
}

export function* gerarSimulacao({ payload }) {
    console.log('chegou no sagas', payload);
    const { cpf, juros, parcelas, valorTotal, dataCompra } = payload
    try {

        yield call(api.post, 'simulacao', { cpf, juros, parcelas, valorTotal, dataCompra })

        toast.success('Simulação criada com sucesso');
        history.push('/simulacoes')

    } catch (err) {
        toast.error('Aldo deu errado', err)
    }
}

export default all([
    takeLatest('@REQUISICAO_BUSCAR_SIMULACOES_POR_CPF', requisicaoBuscarSimulacoesPorCpf),
    takeLatest('@GERAR_SIMULACAO', gerarSimulacao)
])