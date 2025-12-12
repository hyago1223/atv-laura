import {redirect} from 'next/navigation';
import { ItemCompra } from '../../../database/tables';
import '../../css/cadastro.css';

 async function EditaItemCompra(formData) {
    'use server';
    const dados = {
        PrecoUni: formData.get('PrecoUni'),
        quantidade: formData.get('quantidade'),
        SubTot: formData.get('SubTot')
    };
    const id = formData.get('id');

    const ItemCompras = await ItemCompra.findByPk(id);
    ItemCompras.PrecoUni = dados.PrecoUni;
    ItemCompras.quantidade = dados.quantidade;
    ItemCompras.SubTot = dados.SubTot;
    ItemCompras.save();
    redirect('/itemcompra');
}

async function TelaEditaItemCompra({ searchParams }){
    const id = searchParams.id;
    const ItemCompras = await ItemCompra.findByPk(id);
    return(
        <div>
            <form action = {EditaItemCompra}>
                <input type = "hidden" name = "id" defaultValue={ItemCompras.id}/> <br/>

                <label htmlFor= "PrecoUni">Preco Unitario</label>
                <input type = "text" name = "PrecoUni" defaultValue={ItemCompras.PrecoUni}/> <br/>

                <label htmlFor= "SubTot">SubTotal</label>
                <input type = "number" name = "SubTot" defaultValue={ItemCompras.SubTot}/> <br/>

                <label htmlFor= "quantidade">Quantidade</label>
                <input type = "number" name = "quantidade" defaultValue={ItemCompras.quantidade}/> <br/>

                <button>Atualizar</button>
            </form>
        </div>
    );
}

export default TelaEditaItemCompra;