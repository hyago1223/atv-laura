import {redirect} from 'next/navigation';
import { ItemVenda } from '../../../database/tables';
import '../../css/cadastro.css';

 async function insereItemVendas(formData) {
    'use server';
    const dados = {
    SubTot: formData.get('SubTot'),
    quantidade: formData.get('quantidade'),
    };
    await ItemVenda.create(dados);
    redirect ('/itemvenda');
}

function TelaNovoItemVenda(){
    return(
        <div>
            <form action = {insereItemVendas}>
                <label htmlFor= "SubTot">Subtotal</label>
                <input type = "text" name = "SubTot" /> <br/>

                <label htmlFor= "quantidade">Quantidade</label>
                <input type = "text" name = "quantidade" /> <br/>

                <button>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoItemVenda;