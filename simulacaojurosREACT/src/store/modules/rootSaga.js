import { all } from 'redux-saga/effects'

import simulacoes from './simulacao/sagas'

export default function* rootSaga() {
  return yield all([simulacoes])
}