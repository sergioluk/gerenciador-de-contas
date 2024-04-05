
import {useNavigate} from 'react-router-dom'
import '../pages/CriarConta.css'
import ContaForm from '../form/ContaForm'

const CriarConta = () => {

    const navigate = useNavigate()

    function criarConta(conta){

        const api = "http://localhost:8080/contas"
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(conta),
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate("/");
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="tudo">

        <h1 className="titulo2">Cadastrar uma nova conta</h1>
        <hr/>
        <ContaForm handleSubmit={criarConta} btnText="Salvar"/>
    </div>
  )
}

export default CriarConta