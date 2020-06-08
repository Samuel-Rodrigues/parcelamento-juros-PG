import React from 'react'

import {Switch, Route } from 'react-router-dom'

import Home from './paginas/Home/index'
import Simulacoes from './paginas/Simulacoes/index'

export default function Rotas() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/simulacoes" component={Simulacoes} />

        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
  )
}