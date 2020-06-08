import React from 'react'

import { Link } from 'react-router-dom'

import { Container, Content } from './styles'

export default function Header() {

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/home">Simular</Link>
        </nav>
        <div />
        <nav>
          <Link to="/simulacoes">Minhas simulações</Link>
        </nav>
      </Content>
    </Container>
  )
}