import React, { useState } from 'react'

import * as Yup from 'yup'
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import DatePicker, { registerLocale } from 'react-datepicker'
import { AiFillIdcard, AiTwotoneCalendar, AiFillDollarCircle, AiFillDatabase, AiOutlinePercentage } from 'react-icons/ai'

import { setCPF } from '../../store/modules/cpf/actions'
import { gerarSimulacao } from '../../store/modules/simulacao/actions'
import { Container, Title, Body, Form, TInput, DateTime, Button } from './styles'
import { cpfMask, realMaskHome, jurosMask, retiraCaracteresEspeciais } from '../../componentes/Mask/index'


export default function Home() {
    registerLocale('pt', pt)

    const dispatch = useDispatch();

    const [cpf, setCpf] = useState();
    const [juros, setJuros] = useState();
    const [parcelas, setParcelas] = useState();
    const [valorTotal, setValorTotal] = useState();
    const [dataCompra, setDataCompra] = useState();

    const schema = Yup.object().shape({
        dataCompra: Yup.date().required('Data da compra é obrigatória'),
        juros: Yup.string().required('Juros é obrigatório').max(100, 'Juros máximo é de 100%'),
        parcelas: Yup.number().required('Parcela é obrigatório'),
        valorTotal: Yup.string().required('Valor é obrigatório'),
        cpf: Yup.string().required('CPF é obrigatório').min(11, 'CPF Incorreto'),
    })

    async function submitFormulario() {
        await schema.validate({ cpf, juros, parcelas, valorTotal, dataCompra })
            .then((res) => {
                dispatch(gerarSimulacao({ cpf, juros, parcelas, valorTotal, dataCompra }));
                dispatch(setCPF(cpf));
            })
            .catch((err) => {
                toast.error(String(err.errors))
            })
    }

    return (
        <Container>
            <Title>
                <p>Simulador de juros</p>
            </Title>
            <Body>
                <Form>
                    <div>
                        <AiFillIdcard color="#eee" size={50} />
                        <TInput
                            placeholder="CPF"
                            onChange={e => { setCpf(retiraCaracteresEspeciais(e.target.value)) }}
                            value={(!cpf ? '' : cpfMask(cpf))}
                        />
                    </div>
                    <div>
                        <AiFillDollarCircle color="#eee" size={50} />
                        <TInput
                            placeholder="Valor da compra"
                            type="number"
                            onChange={e => { setValorTotal(realMaskHome(e.target.value)) }}
                            value={(!valorTotal ? '' : valorTotal)}
                        />
                    </div>
                    <div>
                        <AiFillDatabase color="#eee" size={50} />
                        <TInput
                            placeholder="Quantidade de parcelas"
                            type="number"
                            onChange={e => { setParcelas(e.target.value) }}
                            value={parcelas}
                        />
                    </div>
                    <div>
                        <AiOutlinePercentage color="#eee" size={50} />
                        <TInput
                            placeholder="Juros por mês"
                            type="text"
                            max={100}
                            onChange={e => { setJuros(e.target.value) }}
                            value={(!juros ? '' : jurosMask(juros))}
                        />
                    </div>
                    <div>
                        <DateTime>
                            <AiTwotoneCalendar color="#eee" size={50} />
                            <DatePicker
                                className="datePiker"
                                placeholderText="Data da compra"
                                dateFormat=" dd / MMMM / yyyy"
                                locale="pt"
                                selected={dataCompra}
                                onChange={date => setDataCompra(date)}
                            />
                        </DateTime>
                        <Button
                        type="button"
                        onClick={() => submitFormulario()}
                    >Simular</Button>
                    </div>
                    
                </Form>
            </Body>
        </Container>
    )
}