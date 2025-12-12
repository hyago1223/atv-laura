import {redirect} from 'next/navigation';
import { Venda } from '../../../database/tables';
import '../../css/cadastro.css';

 async function editaVendas(formData) {
    'use server';
    const dados = {
    ValorTotal: formData.get('ValorTotal'),
    DataVenda: formData.get('DataVenda'),
    };
    const id = formData.get('id');
    const venda = await Venda.findByPk(id);
    venda.ValorTotal = dados.ValorTotal;
    venda.DataVenda = dados.DataVenda;
    await venda.save();
    redirect('/venda');
}

async function TelaNovoVenda({ searchParams }){
    const id = searchParams.id;
    const venda = await Venda.findByPk(id);
    return(
        <div>
            <form action = {editaVendas}>
                <input type = "hidden" name = "id" defaultValue={venda.id}/>
                
                <label htmlFor= "ValorTotal">Valor Total das vendas</label>
                <input type = "text" name = "ValorTotal" defaultValue={venda.ValorTotal}/> <br/>

                <label htmlFor= "DataVenda">Data da Venda</label>
                <input type = "date" name = "DataVenda" defaultValue={venda.DataVenda}/> <br/>

                <button>Atualizar</button>
            </form>
        </div>
    );
}

export default TelaNovoVenda;