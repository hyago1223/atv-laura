import {redirect} from 'next/navigation';
import { Produto } from '../../../database/tables';
import '../../css/cadastro.css';

 async function insereBebida (formData) {
    'use server';
    const dados = {
        nome: formData.get('nome'),
        descricao: formData.get('descricao'),
        teor: formData.get('teor'),
        preco: formData.get('preco')
    };
    await Produto.create(dados);
    redirect ('/bebidas');
}

function TelaNovoBebida(){
    return(
        <div>
            <form action = {insereBebida}>
                <label htmlFor= "nome">Nome</label>
                <input type = "text" name = "nome"/> <br/>

                <label htmlFor= "descricao">Descrição</label>
                <input type = "text" name = "descricao"/> <br/>

                <label htmlFor= "teor">teor</label>
                <input type = "text" name = "teor"/> <br/>

                <label htmlFor='Preco'>Preco</label>
                <input type = "number" name = "preco"/> <br/>

                <button>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoBebida;