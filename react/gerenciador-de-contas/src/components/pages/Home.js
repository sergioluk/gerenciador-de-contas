import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'
import TableRow from '../layout/TableRow'
import { useEffect, useState } from 'react'
import Loading from '../layout/Loading'
import gif from '../../img/gif.gif'

const Home = () => {

    const [contas, setContas] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [atualizacao, setAtualizacao] = useState(2);

    useEffect(() => {
        const api = "http://localhost:8080/contas";
        fetch(api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setContas(data)
            setRemoveLoading(true)
            console.log(data)
        })
        .catch(e => console.log(e))
    },[atualizacao])

    function verificarVencimentoOuPagamento(dataRecebida, pagoEm){

        if (pagoEm) {
            return "pago"
        }
        const [dia, mes, ano] = dataRecebida.split('/')
        const dataVencimento = new Date(ano, mes - 1, dia)
        const dataHoje = new Date();
        dataHoje.setHours(0, 0, 0, 0)

        if (dataHoje > dataVencimento){
            return "vencido"
        }

        return ""
        
    }

    function atualizar(n){
        setAtualizacao(prevAtualizacao => prevAtualizacao + 1 + n);
    }

  return (
    <div>
        <h1 className={styles.titulo}>Listagem de Contas</h1>
        <hr className={styles.hr}/>
        <div className={styles.container_table}>
        {!removeLoading && <Loading />}
        {(contas.length > 0 && removeLoading) && (
            <table>
            <thead>
                <tr>
                    <th>Titulo</th><th>Valor</th><th>Vencimento</th><th>Pagar</th><th>Editar</th>
                </tr>
            </thead>
            <tbody>
                { contas.map((conta) =>
                 <TableRow
                 id = {conta.id}
                 titulo={conta.titulo}
                 valor={conta.valor}
                 vencimento={conta.dataConvertida}
                 juros = {conta.juros}
                 vencido = {verificarVencimentoOuPagamento(conta.dataConvertida, conta.pagoEm)}
                 dtSemConversao = {conta.vencimento}
                 atualizar = {atualizar}
                 key={conta.id}
                 />
                 )
               }
            </tbody>
        </table>
        )}
        
        { ((contas.length === 0 || contas.length === undefined) && removeLoading) && (
            <div className={styles.nenhuma_conta}>
                <p>Nenhuma conta registrada!!!</p>
                <img src={gif} alt="Gif" />
            </div>
        ) }
            
        </div>
        <LinkButton to="/criar-conta" text="Criar Conta" cor="verde"/>
    </div>
  )
}

export default Home