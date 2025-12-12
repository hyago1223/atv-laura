import { Venda } from "../../database/tables.js";
import { redirect } from "next/navigation";
import '../css/listagem.css';

async function ExcluirVenda(formdata) {
    'use server';
    const id = formdata.get('id');
    const item = await Venda.findByPk(id);
    item.destroy();
    redirect('/venda');
}
async function PaginaVenda() {
    const Vendas = await Venda.findAll();
    return (
        <div>
            <h1>Lista de Venda</h1>
            <a href = "/venda/novo" >Criar Venda</a>

            <table border = "1">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>VALOR TOTAL</th>
                    <th>DATA DA VENDA</th>
                    <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Vendas.map(function(vendinhas){
                        return (
                            <tr key={vendinhas.id}>
                                <td>{vendinhas.id}</td>
                                <td>{vendinhas.ValorTotal}</td>
                                <td>{vendinhas.DataVenda}</td>
                                <td>
                                    <form action={'/venda/edita'}>
                                        <input name="id" type="hidden" defaultValue={vendinhas.id}/>
                                        <button>Editar</button>
                                    </form>
                                    <form action={ExcluirVenda}>
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

export default PaginaVenda;