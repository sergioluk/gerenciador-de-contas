import { Link } from 'react-router-dom'
import styles from '../pages/Home.module.css'
import {BsPencil, BsFillTrashFill, BsCashCoin} from 'react-icons/bs'

const TableRow = ({id, titulo, valor, vencimento, vencido, juros, dtSemConversao, atualizar}) => {

    function pagarConta(id){
        
        fetch(`http://localhost:8080/contas/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'pagoEm': new Date(),
                'titulo': titulo,
                'valor': valor,
                'vencimento': dtSemConversao,
                'juros': juros
            }),
        }).then(resp => resp.json())
        .then((data) => {
            //setConta(data)
            atualizarPai(data.valor);
        })
        .catch(err => console.log(err))

    }

    function atualizarPai(n){
        atualizar(n);
    }

    function formatarValor(valor){
        return valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
    }

  return (
    <tr className={styles[vencido]}>
        <td>{titulo}</td>
        <td>{"R$ " + formatarValor(valor)}</td>
        <td>{vencimento}</td>
        <td className={styles.link} onClick={(e) => pagarConta(id)}>
            <BsCashCoin/> Pagar
        </td>
        <td className={styles.link}>
            <Link to={`/contas/${id}`}>
                <BsPencil/> Editar
            </Link>
        </td>
    </tr>
  )
}

export default TableRow