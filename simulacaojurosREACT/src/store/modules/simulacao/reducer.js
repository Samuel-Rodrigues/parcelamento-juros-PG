import produce from 'immer'

const INITIAL_STATE = {
  simulacoes: []
}

export default function simulacoes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@SUCESSO_BUSCAR_SIMULACOES_POR_CPF':
      return produce(state, draft => {
        
        draft.simulacoes = action.payload
        console.log(action.payload)

      })
    default:
      return state
  }
}