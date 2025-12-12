import { redirect } from "next/navigation";
import {ItemVenda} from "../../database/tables";
import '../css/listagem.css';

async function ExcluirItemVenda(formdata) {
    'use server';
    const id = formdata.get('id');
    const item = await ItemVenda.findByPk(id);
    item.destroy();
    redirect('/itemvenda');
}

async function Venda() {
    const vendas = await ItemVenda.findAll();
    return (
        <div>
            <h1>Lista de Itens de Venda</h1>
            <a href = "/itemvenda/novo" >Criar Venda</a>

            <table border = "1">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>SUBTOT</th>
                    <th>QUANTIDADE</th>
                    <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vendas.map(function(vendinhas){
                        return (
                            <tr key={vendinhas.id}>
                                <td>{vendinhas.id}</td>
                                <td>{vendinhas.SubTot}</td>
                                <td>{vendinhas.quantidade}</td>
                                <td>
                                    <form action={'/itemvenda/edita'}>
                                        <input name="id" type="hidden" defaultValue={vendinhas.id}/>
                                        <button>Editar</button>
                                    </form>
                                    <form action={ExcluirItemVenda}>
                                        <input name="id" type="hidden" defaultValue={vendinhas.id}/>
                                        <button>Excluir</button>
                                    </form>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Venda;