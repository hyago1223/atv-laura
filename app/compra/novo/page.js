import {redirect} from 'next/navigation';
import { Compra } from '../../../database/tables';
import '../../css/cadastro.css';

 async function insereCompra(formData) {
    'use server';
    const dados = {
        nome: formData.get('valor'),
        descricao: formData.get('data')
    };
    await Compra.create(dados);
    redirect ('/Compra');
}

function TelaNovaCompra(){
    return(
        <div>
            <form action = {insereCompra}>
                <label htmlFor= "valor">valor</label>
                <input type = "text" name = "valor"/> <br/>

                <label htmlFor= "data">data</label>
                <input type = "date" name = "data"/> <br/>

                <button>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovaCompra;