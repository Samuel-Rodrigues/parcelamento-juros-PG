import React, { useState, useEffect } from 'react';

import { format } from 'date-fns'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Accordion, Card, Button } from 'react-bootstrap';

import { toast } from 'react-toastify'
import { setCPF } from '../../store/modules/cpf/actions'
import { Container, Title, Form, Body, TitleAccordion } from './styles'
import { cpfMask, retiraCaracteresEspeciais } from '../../componentes/Mask/index'
import { requisicaoBuscarSimulacoesPorCpf } from '../../store/modules/simulacao/actions'


export default function Simulacoes() {

    const dispatch = useDispatch();

    const { cpf } = useSelector(state => state.cpf);
    const simulacoes = useSelector(state => state.simulacoes.simulacoes);

    const [buscarCpf, setBuscarCpf] = useState();

    useEffect(() => {
        if (cpf) {
            dispatch(requisicaoBuscarSimulacoesPorCpf(cpf))
            setBuscarCpf(cpf)
        }
    }, []);

    function buscarSimulacoesPorCpf() {
        if (!buscarCpf) {
            toast.info('Informe o CPF')
            dispatch(setCPF(''))
            return
        }

        dispatch(requisicaoBuscarSimulacoesPorCpf(buscarCpf))
        dispatch(setCPF(buscarCpf))
    }

    return (
        <Container>
            <Title>
                <p>Simulações</p>
            </Title>
            <Form>
                <input
                    placeholder={(buscarCpf ? cpfMask(buscarCpf) : 'Digite seu CPF')}
                    onChange={e => { setBuscarCpf(retiraCaracteresEspeciais(e.target.value)) }}
                    value={(buscarCpf ? cpfMask(buscarCpf) : '')}
                />
                <button type="button" onClick={buscarSimulacoesPorCpf}> Buscar</button>
            </Form>
            <Body>
                <div>
                    {(simulacoes ? simulacoes.map(item => {
                        return (
                            <>
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                <TitleAccordion>
                                                    <span><h3>Data da compra: {format(new Date(item.simulacao.dataCompra), 'dd/MM/yyyy')} </h3>
                                                        <h3>Valor da compra: {item.simulacao.valorConvertidoParaReal}</h3>
                                                    </span>
                                                    <span>
                                                        <h4></h4>
                                                        <h4>{item.simulacao.juros}%/mês</h4>
                                                    </span>
                                                </TitleAccordion>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Num. Parcela</th>
                                                            <th>Valor da parcela</th>
                                                            <th>Juros</th>
                                                            <th>Vencimento</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {item.parcelas.map(item => {
                                                            return (
                                                                <tr>
                                                                    <td>{item.numeroParcela}</td>
                                                                    <td>{(item.valorParcela)}</td>
                                                                    <td>{(item.valorJuros)}</td>
                                                                    <td>{format(new Date(item.dataVencimento), 'dd/MM/yyyy')}</td>
                                                                </tr>
                                                            )
                                                        })}

                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </>
                        )
                    })
                        : (<></>))}
                </div>
            </Body>
        </Container>
    )
}