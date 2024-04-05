import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../layout/Loading'
import '../pages/CriarConta.css'
import ContaForm from './ContaForm'

function Conta(){

    const {id} = useParams()
    const [conta, setConta] = useState([])
    const [mostrarContaForm, setMostrarContaForm] = useState(false);

    useEffect(() => {

        fetch(`http://localhost:8080/contas/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
        .then((data) => {
            setConta(data)
        })
        .catch(err => console.log(err))

    }, [id])

    function toggleProjectForm(){
        setMostrarContaForm(!mostrarContaForm);
    }

    function editConta(conta){

        fetch(`http://localhost:8080/contas/${conta.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(conta),
        }).then(resp => resp.json())
        .then((data) => {
            setConta(data)
            setMostrarContaForm(false)
        })
        .catch(err => console.log(err))

    }

    return (
        <div>
            {conta.titulo ? (
                <div className='editar'>
                    <h1>Conta: {conta.titulo}</h1>
                    <button className="btn"
                     onClick={toggleProjectForm}>{ !mostrarContaForm ? 'Editar Conta' : 'Fechar'}</button>
                     {!mostrarContaForm ? (
                        <div className="detalhes">
                            <p>
                                <span>Valor:</span> {conta.valor}
                            </p>
                            <p>
                                <span>Data de Vencimento:</span> R${conta.vencimento}
                            </p>
                            <p>
                                <span>Juros:</span> R${conta.juros}
                            </p>
                            {conta.pagoEm && (
                            <p>
                                <span>Pagou:</span> R${conta.pagoEm}
                            </p>)}
                            
                        </div>
                    ):(
                        <div>
                            <ContaForm handleSubmit={editConta}
                            btnText="Conclir Edição"
                            contaData={conta} />
                        </div>
                    )}
                </div>
            ) 
            : 
            ( <Loading />)}
        </div>
    )



}
export default Conta