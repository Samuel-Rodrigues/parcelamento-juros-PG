import { combineReducers } from 'redux'

import simulacoes from './simulacao/reducer'
import cpf from './cpf/reducer'

export default combineReducers({
    simulacoes,
    cpf
})