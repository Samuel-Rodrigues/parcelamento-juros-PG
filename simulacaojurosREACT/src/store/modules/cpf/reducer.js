import produce from 'immer'

const INITIAL_STATE = {
  cpf: ''
}

export default function cpf(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@SET_CPF':
      return produce(state, draft => {
        draft.cpf = action.payload
      })
    default:
      return state
  }
}