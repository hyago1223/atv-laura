import {redirect} from 'next/navigation';
import { ItemCompra } from '../../../database/tables';
import '../../css/cadastro.css';

 async function insereItemCompra(formData) {
    'use server';
    const dados = {
        PrecoUni: formData.get('PrecoUni'),
        quantidade: formData.get('quantidade'),
        SubTot: formData.get('SubTot')
    };
    await ItemCompra.create(dados);
    redirect ('/itemcompra');
}

function TelaNovoItemCompra(){
    return(
        <div>
            <form action = {insereItemCompra}>
                <label htmlFor= "PrecoUni">Preco Unitario</label>
                <input type = "text" name = "PrecoUni"/> <br/>

                <label htmlFor= "SubTot">SubTotal</label>
                <input type = "number" name = "SubTot"/> <br/>

                <label htmlFor= "quantidade">Quantidade</label>
                <input type = "number" name = "quantidade"/> <br/>

                <button>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoItemCompra;