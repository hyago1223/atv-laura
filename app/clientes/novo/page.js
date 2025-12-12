import {redirect} from 'next/navigation';
import { Cliente } from '../../../database/tables';
import '../../css/cadastro.css';

async function insereCliente (formData) {
    'use server';

    const dados = {
    id: formData.get('id'),
    nome: formData.get('nome'),
    email: formData.get('email'),
    senha: formData.get('senha'),

    };

    await Cliente.create(dados);
    redirect ('/clientes');
}

function TelaNovoCliente(){
    return(
        <div>
            <form action = {insereCliente}> 
                <label htmlFor= "id">ID</label>
                <input type = "text" name = "id" /> <br/>

                <label htmlFor= "nome">Nome</label>
                <input type = "text" name = "nome" /> <br/>

                <label htmlFor= "email">Email</label>
                <input type = "text" name = "email" /> <br/>

                <label htmlFor= "senha">Senha</label>
                <input type = "text" name = "senha" /> <br/>


                <button>Cadastrar</button>

            </form>
        </div>
    );
}

export default TelaNovoCliente;