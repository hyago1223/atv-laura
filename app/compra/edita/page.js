import {redirect} from 'next/navigation';
import { Compra } from '../../../database/tables';
import '../../css/cadastro.css';

 async function insereCompra(formData) {
    'use server';
    const dados = {
        nome: formData.get('valor'),
        descricao: formData.get('data')
    };
    const id = formData.get('id');

    const compras = await Compra.findByPk(id);

    compras.nome = dados.nome;
    compras.descricao = dados.descricao;
    await compras.save();
    redirect ('/compra');
}

async function TelaNovaCompra({ searchParams }){
    const id = searchParams.id;
    const compras = await Compra.findByPk(id);
    return(
        <div>
            <form action = {insereCompra}>
                <label htmlFor= "valor">valor</label>
                <input type = "text" name = "valor" defaultValue={compras.valor}/> <br/>

                <label htmlFor= "data">data</label>
                <input type = "date" name = "data" defaultValue={compras.valor}/> <br/>

                <button>Atualizar</button>
            </form>
        </div>
    );
}

export default TelaNovaCompra;