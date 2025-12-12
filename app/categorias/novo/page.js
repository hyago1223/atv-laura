import {redirect} from 'next/navigation';
import { Categoria } from '../../../database/tables';
import '../../css/cadastro.css';

 async function insereCategoria (formData) {
    'use server';
    const dados = {
    nome: formData.get('nome'),
    };

    await Categoria.create(dados);
    redirect ('/categorias');
}

function TelaNovoCategoria(){
    return(
        <div>
            <form action = {insereCategoria}>
                <label htmlFor= "nome">Nome</label>
                <input type = "text" name = "nome" /> <br/>

                <button>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoCategoria;