import {redirect} from 'next/navigation';
import { Venda } from '../../../database/tables';
import '../../css/cadastro.css';

 async function insereVendas(formData) {
    'use server';
    const dados = {
    SubTot: formData.get('SubTot'),
    quantidade: formData.get('quantidade'),
    };
    await Venda.create(dados);
    redirect('/venda');
}

function TelaNovoVenda(){
    return(
        <div>
            <form action = {insereVendas}>
                <label htmlFor= "ValorTotal">Valor Total das vendas</label>
                <input type = "text" name = "ValorTotal" /> <br/>

                <label htmlFor= "DataVenda">Data da Venda</label>
                <input type = "date" name = "DataVenda" /> <br/>

                <button>Cadastrar</button>
            </form>
        </div>
    );
}

export default TelaNovoVenda;