import {redirect} from 'next/navigation';
import { ItemVenda } from '../../../database/tables';
import '../../css/cadastro.css';

 async function insereItemVendas(formData) {
    'use server';
    
    const dados = {
    SubTot: formData.get('SubTot'),
    quantidade: formData.get('quantidade'),
    };

    const id = formData.get('id');
    const ItemVendas = ItemVenda.findByPk(id);

    ItemVendas.SubTot = dados.SubTot;
    ItemVendas.quantidade = dados.quantidade;

    redirect ('/itemvenda');
}

async function TelaNovoItemVenda({ searchParams }){
    const id = searchParams.id;
    const ItemVendas = await ItemVenda.findByPk(id);
    return(
        <div>
            <form action = {insereItemVendas}>
                <label htmlFor= "SubTot">Subtotal</label>
                <input type = "text" name = "SubTot" defaultValue={ItemVendas.SubTot}/> <br/>

                <label htmlFor= "quantidade">Quantidade</label>
                <input type = "text" name = "quantidade" defaultValue={ItemVendas.quantidade}/> <br/>

                <button>Atualizar</button>
            </form>
        </div>
    );
}

export default TelaNovoItemVenda;