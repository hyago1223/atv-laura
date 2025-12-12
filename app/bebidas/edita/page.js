import {redirect} from 'next/navigation';
import { Produto } from '../../../database/tables';
import '../../css/cadastro.css';

 async function EditaBebida (formData) {
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

async function TelaEditaBebida({ searchParams }){
    const id = searchParams.id;
    const bebida = await Produto.findByPk(id);
    return(
        <div>
            <form action = {EditaBebida}>
                <input type = "hidden" name = "id" defaultValue={bebida.id}/>

                <label htmlFor= "nome">Nome</label>
                <input type = "text" name = "nome" defaultValue={bebida.nome}/> <br/>

                <label htmlFor= "descricao">Descrição</label>
                <input type = "text" name = "descricao" defaultValue={bebida.descricao}/> <br/>

                <label htmlFor= "teor">teor</label>
                <input type = "text" name = "teor" defaultValue={bebida.teor}/> <br/>

                <label htmlFor='Preco'>Preco</label>
                <input type = "number" name = "preco" defaultValue={bebida.preco}/> <br/>

                <button>Editar</button>
            </form>
        </div>
    );
}

export default TelaEditaBebida;