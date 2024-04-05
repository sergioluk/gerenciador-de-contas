import { useState } from 'react';
import LinkButton from '../layout/LinkButton'
import '../pages/CriarConta.css'
import Input from './Input';
import SubmitButton from './SubmitButton';

function ContaForm({handleSubmit, btnText, contaData}){

    const [conta, setConta] = useState(contaData || {});

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(conta);
    }

    function handleChange(e) {
        setConta({...conta, [e.target.name]: e.target.value})
    }


    return (
        <form onSubmit={submit} className="form">

            <div className="title">
                <h2>Cadastro</h2>
            </div>

            <Input 
            type="text" 
            text="Título" 
            name="titulo" 
            placeholder="Insira o nome do título" 
            handleOnChange={handleChange} 
            value={conta.titulo? conta.titulo : ''} 
            />

            <Input 
            type="number" 
            text="Valor" 
            name="valor" 
            placeholder="Insira o valor" 
            handleOnChange={handleChange} 
            value={conta.valor? conta.valor : ''} 
            />

            <Input 
            type="number" 
            text="Juros" 
            name="juros" 
            placeholder="Insira o juros" 
            handleOnChange={handleChange} 
            value={conta.juros? conta.juros : ''} 
            />

            <Input 
            type="date" 
            text="Vencimento" 
            name="vencimento" 
            handleOnChange={handleChange} 
            value={conta.vencimento? conta.vencimento : ''} 
            />

            <p className="frase">*O valor da conta está sujeito a aumentos diários devido à taxa de juros.</p>

            <div className="botoes2">
                <SubmitButton text={btnText} />
                <LinkButton to="/" text="Cancelar" cor="vermelho"/>  
            </div>
                    
        </form>     
    )

}
export default ContaForm