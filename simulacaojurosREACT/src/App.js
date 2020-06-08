import React from 'react';

import Rotas from './rotas'
import { Provider } from 'react-redux'
import GlobalStyle from './styles/global'
import Header from './componentes/Header'
import { ToastContainer } from 'react-toastify'
import history from './services/history'
import { Router } from 'react-router-dom'
import './config/ReactotronConfig'
import store from './store'


function App() {
  return (
      <Provider store={store}>
        <Router history={history}>
          <Header/>
          <Rotas />
          <GlobalStyle />
          <ToastContainer autoClose={4000} />
        </Router>
      </Provider>
  )
}

export default App;
